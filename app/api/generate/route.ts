import { NextRequest, NextResponse } from 'next/server';
import { runWorkersAi } from '@/lib/auth';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const { category, keywords, count } = await req.json();

    if (!category || !keywords) {
      return NextResponse.json(
        { error: 'Category and keywords are required' },
        { status: 400 }
      );
    }

    const numNames = Math.min(parseInt(count) || 10, 20);

    const systemPrompt = `You are a creative naming assistant. Generate unique, memorable names based on the category and keywords provided. Return ONLY a JSON array of name objects, nothing else.`;

    const prompt = `Generate ${numNames} creative ${category} names based on these keywords: ${keywords}.

Return ONLY a valid JSON array in this exact format:
[
  {"name": "ExampleName", "description": "Brief explanation of why this name works"},
  {"name": "AnotherName", "description": "Another brief explanation"}
]

Requirements:
- ${numNames} unique names
- Each name should be memorable and relevant to: ${keywords}
- Category: ${category}
- Descriptions should be 10-20 words
- Return ONLY the JSON array, no markdown, no additional text`;

    const result = await runWorkersAi({
      prompt: `${systemPrompt}\n\n${prompt}`,
      maxTokens: 2048
    });

    if (!result || typeof result !== 'string') {
      throw new Error('Invalid response from AI');
    }

    // Extract JSON from response
    let jsonText = result.trim();
    
    // Remove markdown code blocks if present
    jsonText = jsonText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    
    // Try to find JSON array in the response
    const jsonMatch = jsonText.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      jsonText = jsonMatch[0];
    }

    const names = JSON.parse(jsonText);

    if (!Array.isArray(names) || names.length === 0) {
      throw new Error('Invalid names format');
    }

    // Validate structure
    const validNames = names
      .filter(item => item.name && item.description)
      .slice(0, numNames);

    if (validNames.length === 0) {
      throw new Error('No valid names generated');
    }

    return NextResponse.json({ names: validNames });
  } catch (error) {
    console.error('Generate error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate names' },
      { status: 500 }
    );
  }
}
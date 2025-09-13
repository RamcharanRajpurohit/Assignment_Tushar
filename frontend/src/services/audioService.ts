const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export interface GenerateAudioResponse {
  audioUrl: string;
  success: boolean;
  error?: string;
}

export const generateAudioFromText = async (
  text: string, 
  language: string,
  voiceId?: string
): Promise<GenerateAudioResponse> => {
  try {
    const response = await fetch(`${backendUrl}/api/audio/${language}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    return {
      audioUrl: data.audioUrl,
      success: true,
    };
  } catch (error) {
    console.error('Error generating audio:', error);
    return {
      audioUrl: '',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};
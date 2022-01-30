import { createClient } from '@supabase/supabase-js'
import { WordFrequency } from './types'

const options = {
  schema: 'public',
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
}
const supabase = createClient(
  import.meta.env.VITE_SP_URL,
  import.meta.env.VITE_SP_KEY,
  options,
)

const toFilter = (submittedWords: string[]) =>
  submittedWords.map((word) => `word.eq.${word}`).join(',')

export const getWordsFrequency = async (
  submittedWords: string[],
): Promise<WordFrequency[]> => {
  try {
    const { body } = await supabase
      .from('words')
      .select('id, word,frequency')
      .or(toFilter(submittedWords))
      .order('frequency', { ascending: false })
    return body as WordFrequency[]
  } catch (error) {
    console.error('Error fetching from Word collection')
    return []
  }
}

export const getThreeMostFrequentWords = async (
  solution: string,
): Promise<WordFrequency[]> => {
  try {
    const { body } = await supabase
      .from('words')
      .select('id, word,frequency')
      .neq('word', solution)
      .order('frequency', { ascending: false })
      .limit(3)
    return body as WordFrequency[]
  } catch (error) {
    console.error('Error fetching from Word collection')
    return []
  }
}

export const saveWordsFrequency = async (
  submittedWords: string[],
): Promise<void> => {
  const oldWordsFrequency = await getWordsFrequency(submittedWords)
  const updatedWordsFrequency: WordFrequency[] = oldWordsFrequency.map((w) => ({
    ...w,
    frequency: w.frequency + 1,
  }))

  try {
    await supabase.from('words').upsert(updatedWordsFrequency)
  } catch (error) {
    console.error('Error saving to Word collecition')
  }
}

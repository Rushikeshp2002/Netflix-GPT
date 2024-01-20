import OpenAI from 'openai';
// import OpenAI from 'https://deno.land/x/openai@v4.24.7/mod.ts';
import { OPEN_AI_KEY } from './constant';

const openai = new OpenAI({
  apiKey: OPEN_AI_KEY,
  dangerouslyAllowBrowser: true
  // This is the default and can be omitted
});

export default openai;
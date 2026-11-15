import {mkdir, writeFile} from 'node:fs/promises';
import {spawn} from 'node:child_process';

const base='http://127.0.0.1:8000';
const server=spawn(process.execPath,['server.mjs'],{stdio:'ignore'});
try {
  let ready=false;
  for(let attempt=0;attempt<30;attempt++){
    try { const response=await fetch(`${base}/health`); if(response.ok){ready=true;break} } catch {}
    await new Promise(resolve=>setTimeout(resolve,1000));
  }
  if(!ready) throw new Error('Market data service did not start');
  const newsResponse=await fetch(`${base}/api/news?refresh=1`);
  if(!newsResponse.ok) throw new Error(`News update failed: ${newsResponse.status}`);
  const news=await newsResponse.json();
  const marketResponse=await fetch(`${base}/api/market`);
  if(!marketResponse.ok) throw new Error(`Market update failed: ${marketResponse.status}`);
  const market=await marketResponse.json();
  await mkdir('data',{recursive:true});
  await Promise.all([
    writeFile('data/news.json',JSON.stringify(news,null,2)+'\n'),
    writeFile('data/market.json',JSON.stringify(market,null,2)+'\n')
  ]);
  console.log(`Snapshot saved: ${Object.keys(market.quotes||{}).length} quotes; ${news.articles?.length||0} news stories.`);
} finally {
  server.kill();
}


export default async function handler(req, res) {
  if(req.method === 'POST'){
    try {
      const data = req.body;
      console.log('Visitor info:', data); // Vercel logda ko'rinadi

      res.status(200).json({ ok:true });
    } catch(err) {
      res.status(500).json({ ok:false, error: err.message });
    }
  } else {
    res.status(405).json({ ok:false, error:'Method not allowed' });
  }
}

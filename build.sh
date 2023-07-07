git pull
npm run build
echo flights.shuchir.dev >> www/CNAME 
git stage -A
git commit -m "fixes"
git push


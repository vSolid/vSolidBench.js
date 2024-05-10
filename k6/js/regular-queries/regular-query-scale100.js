import http from 'k6/http';
import { group } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  group("Regular query for Scale 100", () => {
    const res = http.get(`http://localhost:3000/test/scale100`);
    if (res.status !== 200) {
      console.log(`Request failed. Status: ${res.status}, Body: ${res.body}`);
    }
  });
}

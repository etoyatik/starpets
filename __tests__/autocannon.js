import autocannon from 'autocannon';

async function test() {
  const result = await autocannon({
    url: 'http://localhost:3000/api/users/29b3a37d-2a8b-4c3a-80b2-b1cc64d2bf7f/balance',
    connections: 10, //default
    pipelining: 1, // default
    duration: 10, // default
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify({ amount: -2 }),
  });
  console.table(result.statusCodeStats);
}

test();

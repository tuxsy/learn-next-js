async function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Page() {
  await wait(300);
  return <h1>Hello, Settings page!</h1>;
}
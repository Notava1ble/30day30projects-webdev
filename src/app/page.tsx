export default async function Page() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
    {
      cache: "no-store",
    }
  );

  const cryptoData = await res.json();
  if (cryptoData?.status?.error_code == 429)
    return (
      <main className="w-screen h-screen flex-col flex justify-center items-center">
        <p>status code: {cryptoData.status.error_code}</p>
        <p>message: {cryptoData.status.error_message}</p>
      </main>
    );

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <p>{cryptoData[0].current_price}</p>
    </main>
  );
}

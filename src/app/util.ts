import { headers } from "next/headers";

export const getHeaders = async () => {
  const headersList = await headers();
  // headersListを出力すると入っているのがわからない、Map(0),nullになる (読み違えているかもしれない)
  console.log(headersList);
  // headersListからキーを指定して取得できる
  const userAgent = headersList.get("user-agent");
  const userforwarded = headersList.get("x-forwarded-proto");
  // 以下はmiddlewareで設定したヘッダーの値
  const bookname = headersList.get("x-middleware-request-cd1");
  console.log("==================================");
  console.log("headersList:", userAgent);
  console.log("headersList:", userforwarded);
  console.log("headersList:", bookname);

  return headersList;
};

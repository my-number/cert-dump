import * as rpc from "./rpc";

declare var window: any;

const i2h = (il: number[]) =>
  "0x" + il.map(i => ("0" + i.toString(16)).slice(-2)).join("");

export default async function() {
  try {
    const readers = await rpc.getReaders();

    let currentCard = new rpc.Card(-1);

    if (readers.length == 1) {
      currentCard = await readers[0].open();
    } else {
      for (let reader of readers) {
        if (confirm(`${reader.name}と接続しますか？`)) {
          currentCard = await reader.open();
          break;
        }
      }
    }
    window.document.getElementById("data").innerText = "cert読み込み、はじめ！";
    const cert = (await currentCard.getCert()) as number[];

    window.document.getElementById("data").innerText = i2h(cert);
  } catch (e) {
    window.document.getElementById("data").innerText = e.toString();
  }
}

import * as t from "https://deno.land/std/testing/asserts.ts";
import { RandomMT } from "./RandomMT.js";

Deno.test("simple", () => {
  const nbox = 10;
  const r = new RandomMT();
  const ar = new Array(nbox);
  for (let i = 0; i < ar.length; i++) {
    ar[i] = 0;
  }
  const m = 100000;
  for (let i = 0; i < m; i++) {
    const n = r.getValue();
    //console.log(n);
    ar[n % nbox]++;
  }
  for (let i = 0; i < ar.length; i++) {
    //console.log(ar[i]);
    t.assert(ar[i] > m / nbox * .4 && ar[i] < m / nbox * 2.0);
  }
});

Deno.test("init seed", () => {
  const r = new RandomMT(0);
  t.assertEquals(r.getValue(), 1125053530);
  t.assertEquals(r.getValue(), 1570041982);
  t.assertEquals(r.getValue(), 347012937);
});
Deno.test("init seed", () => {
  const r = new RandomMT(1);
  //t.assertEquals(r.getValue(), 1125053531);
  t.assertEquals(r.getValue(), 1570041982);
  t.assertEquals(r.getValue(), 347012937);
});

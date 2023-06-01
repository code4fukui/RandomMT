/* A C-program for TT800 : July 8th 1996 Version */
/* by M. Matsumoto, email: matumoto@math.keio.ac.jp */
/* genrand() generate one pseudorandom number with double precision */ /* which is uniformly distributed on [0,1]-interval */
/* for each call. One may choose any initial 25 seeds */
/* except all zeros. */
/* See: ACM Transactions on Modelling and Computer Simulation, */
/* Vol. 4, No. 3, 1994, pages 254-266. */

const N = 25;
const M = 7;

export class RandomMT {
  x = [ /* initial 25 seeds, change as you wish */
    0x95f24dab, 0x0b685215, 0xe76ccae7, 0xaf3ec239, 0x715fad23,
    0x24a590ad, 0x69e4b5ef, 0xbf456141, 0x96bc1b7b, 0xa7bdf825,
    0xc1de75b7, 0x8858a9c9, 0x2da87693, 0xb657f9dd, 0xffdc8a9f,
    0x8121da71, 0x8b823ecb, 0x885d05f5, 0x4e20cd47, 0x5a9ad5d9,
    0x512c0c03, 0xea857ccd, 0x4cc1d30f, 0x8891a8a1, 0xa6b7aadb
  ];
  mag01 = [
    0x0, 0x8ebfd028 /* this is magic vector ‘a’, don’t change */
  ];
  constructor(seed) {
    this.y = 0;
    this.k = 0;
    for (let i = 0; i < seed; i++) {
      this.getValue();
    }
  }
  getValue() {
    let k = this.k;
    const x = this.x;
    const mag01 = this.mag01;
    if (k == N) { /* generate N words at one time */
      let kk;
      for (let kk = 0; kk < N - M; kk++) {
        x[kk] = x[kk + M] ^ (x[kk] >> 1) ^ mag01[x[kk] % 2];
      }
      for (;kk < N; kk++) {
        x[kk] = x[kk + (M - N)] ^ (x[kk] >> 1) ^ mag01[x[kk] % 2];
      }
      k = 0;
    }
    let y = x[k];
    y ^= (y << 7) & 0x2b5b2500; /* s and b, magic vectors */
    y ^= (y << 15) & 0xdb8b0000; /* t and c, magic vectors */
    y &= 0xffffffff; /* you may delete this line if word size = 32 */
    y ^= y >> 16; /* added to the 1994 version */
    k++;
    this.k = k;
    return y;
  }
}

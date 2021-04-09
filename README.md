# Ethereum ERC-20 Token Tracker

This Detect.js file is for tracking a blockchain transaction

## Dependencies:
- node.js
- node-fetch

### You can start tracking by:

```
node Detect.js <API-KEY> <CONTRACT-ADDRESS> <TRACKING-ADDRESS> <SET-TIMEOUT (s)>
```

Sample Output(s):
```

<---- Tracking Transaction ---->

Tx: 0x905cdb49db7b8804830017e3f3d4a6d80f30c15f2ef8d7df1e0d09e95f5cbba7 Amount: 10 From: 0xeca19b1a87442b0c25801b809bf567a6ca87b1da To: 0xee889cdf628e138f15538304fd72e2af56cbe4b6
Tx: 0xde88b7bbe2d12527a53d3ce4c0f9c980da5683fd1f5ec0c76b0a43cf01eb8f41 Amount: 5 From: 0xeca19b1a87442b0c25801b809bf567a6ca87b1da To: 0x4b41947e269464408bbd9dce7346a7e07d522b12
Tx: 0x455354c462770b8dd8a72952afaa61cd57b99d1134369d4d0c2ca859aa174000 Amount: 5 From: 0xeca19b1a87442b0c25801b809bf567a6ca87b1da To: 0x873ce5c27fe1a679b724e25b5a856282a93b137f
Tx: 0x6ce6f2b521c84bd983752c3304ca5ae1a6b0ba54eaa29f84a1363c9938cd98f3 Amount: 7 From: 0xee889cdf628e138f15538304fd72e2af56cbe4b6 To: 0x936146f6850dc157e77fc060c442e0bdffbbe6ff
Tx: 0x54467620c2b9a81edcaf551f35971aa7d0ff70459a5708603897c5f131bbb330 Amount: 3 From: 0xee889cdf628e138f15538304fd72e2af56cbe4b6 To: 0x11759e580b444aa1136482929984c76a19ef2794
Tx: 0xd7fb8762f19f4745b6abd6d744df21ffd933905180ea12262c7e8fc0d93382d8 Amount: 3 From: 0x4b41947e269464408bbd9dce7346a7e07d522b12 To: 0x711447b288e2f853fa9716aa8eba37b02ca8a50f
Tx: 0xae60662ef751a8f682c78fdcf3c9ce6de57b6ec5971068c7fcf131ccebf7648c Amount: 10 From: 0x873ce5c27fe1a679b724e25b5a856282a93b137f To: 0x711447b288e2f853fa9716aa8eba37b02ca8a50f
Tx: 0x55275d384f5a4a664c8b63403bd1449e5d192bb92d00fc0d4ccd869824a9ea42 Amount: 5 From: 0x711447b288e2f853fa9716aa8eba37b02ca8a50f To: 0x8d16abfba10c079340ddf2b252f94353cdccfa57
Tx: 0x98daa5d5b2106c2d29dcd7d21da2102afe5ccfac57afcb3cc0b422878d7eb0e6 Amount: 3 From: 0x711447b288e2f853fa9716aa8eba37b02ca8a50f To: 0x8f8d0e8c921b6fbee6da796f3c823a8a1e354bea
Tx: 0x6d0afa9930a11a52b76efab212cfb9d94463c909c838887db1f1c84f92576618 Amount: 5 From: 0x711447b288e2f853fa9716aa8eba37b02ca8a50f To: 0xabde0e83ba513891aa3bc0a2f796132cae026106
Tx: 0x167b71f723d9bab42391a45b0741d271dbe8885893ae928d8f82b272784bf1ee Amount: 5 From: 0x936146f6850dc157e77fc060c442e0bdffbbe6ff To: 0x635893f9918cbb41cb6c6bde4a87e5959f53dd56
Tx: 0x989541dbda86669f2d0c1e4719a6715bf5efd913c0ef82042767ffb281cca3b4 Amount: 2 From: 0x11759e580b444aa1136482929984c76a19ef2794 To: 0x04bb39f36bbadf4e31aa1df09a2f5a0b76114a62
Tx: 0x86d4cdb27c58832c8e0d5e9ecbfba6704901066ebfe1ef45935baa46b9d23cad Amount: 1 From: 0x11759e580b444aa1136482929984c76a19ef2794 To: 0x8d16abfba10c079340ddf2b252f94353cdccfa57

<---- Tracking Final Token ---->

Address: 0xeca19b1a87442b0c25801b809bf567a6ca87b1da Amount: 0
Address: 0xee889cdf628e138f15538304fd72e2af56cbe4b6 Amount: 0
Address: 0x4b41947e269464408bbd9dce7346a7e07d522b12 Amount: 2
Address: 0x873ce5c27fe1a679b724e25b5a856282a93b137f Amount: 30
Address: 0x711447b288e2f853fa9716aa8eba37b02ca8a50f Amount: 0
Address: 0x8f8d0e8c921b6fbee6da796f3c823a8a1e354bea Amount: 3
Address: 0xabde0e83ba513891aa3bc0a2f796132cae026106 Amount: 5
Address: 0x936146f6850dc157e77fc060c442e0bdffbbe6ff Amount: 2
Address: 0x8d16abfba10c079340ddf2b252f94353cdccfa57 Amount: 6
Address: 0x11759e580b444aa1136482929984c76a19ef2794 Amount: 0
Address: 0x04bb39f36bbadf4e31aa1df09a2f5a0b76114a62 Amount: 2
Address: 0x635893f9918cbb41cb6c6bde4a87e5959f53dd56 Amount: 5
```
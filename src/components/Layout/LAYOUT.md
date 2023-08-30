export const CONTENT =
  "min-w-sz-764 sm:w-full md:w-full lg:min-w-sz-764 lg:min-w-sz-764 xl:min-w-sz-764 2xl:min-w-sz-764 3xl:min-w-sz-764";
// export const TRAILING_SIDEBAR: string = "min-w-sz-208 sm:hidden";

// SM:  640 –-> full
// MD:  764 --> full
// LG: 1024 --> 972
// XL: 1280 --> 1180

// XXL: 1440 --> 1388
// XXXL: 1600 --> 1596

///////////////////////////////////////////////////////////////////////////
// 3xl
// 1600 > 1600
// |<--|---------|---------|----------------------|---------|---------|-->|
// |   |     208 |                                     1184 |     208 |   |
// |   |     208 |     208 |                  768 |     208 |     208 |   |
// |   |   panel |                                     main |   panel |   |
// |<--                                                     top-banner -->|
// |             |                                   header |             |
// |<--                                                           hero -->|
// |   |   panel | sidebar |              content | sidebar |   panel |   |
// |             |                                   footer |             |
// |<--                                                  bottom-banner -->|

///////////////////////////////////////////////////////////////////////////
// 2xl
// 1400 > 1392
// |<--|---------|----------------------|---------|---------|-->|
// |   |                                     1184 |     208 |   |
// |   |     208 |                            980 |     208 |   |
// |   |     208 |                  768 |     208 |     208 |   |
// |   |                                   header |         |   |
// |   | sidebar |                           main |   panel |   |
// |   | sidebar |              content | sidebar |   panel |   |

///////////////////////////////////////////////////////////////////////////
// xl
// 1280 > 1184
// |<--|---------|----------------------|---------|-->|
// |   |                                     1184 |   |
// |   |     208 |                  768 |     208 |   |
// |   |                                   header |   |
// |   | sidebar |              content | sidebar |   |
// |<--                                       hero -->|

///////////////////////////////////////////////////////////////////////////
// lg
// 1024 > 976
// |<--|---------|----------------------|-->|
// |   |                            976 |   |
// |   |     208 |                  768 |   |
// |   |                         header |   |
// |   | sidebar |              content |   |
// |<--                             hero -->|

///////////////////////////////////////////////////////////////////////////
// md
// 764
// |<-------------------->|
// |                 full |
// |              content |
// |<--           hero -->|

///////////////////////////////////////////////////////////////////////////
// sm
// 640
// |<--------------->|
// |            full |
// |         content |
// |<--      hero -->|
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <g filter="url(#filter0_d)">
        <rect width="89" height="89" rx="44.5" fill="#50E3C2" />
        <path d="M75.9742 36.6016C75.9742 26.2618 61.8787 17.8802 44.4962 17.8802C27.1137 17.8802 13.0264 26.2618 13.0264 36.6016V57.2434C13.0247 57.9627 13.0938 58.6799 13.2324 59.3814C15.0118 68.709 28.3329 75.9932 44.4962 75.9932C60.6595 75.9932 73.9888 68.7374 75.8012 59.4098C75.9357 58.7075 76.0047 57.9908 76.0072 57.2718V36.6111L75.9742 36.6016Z" fill="#FFD087" />
        <path d="M44.4965 76.8636C28.1191 76.8636 14.3449 69.428 12.4666 59.5707C12.3189 58.8065 12.2443 58.0262 12.2441 57.2435V36.6017C12.2441 25.7795 26.7104 16.9816 44.4965 16.9816C62.2827 16.9816 76.7572 25.7795 76.7572 36.6017V57.2435C76.757 58.0262 76.6824 58.8065 76.5348 59.5707C74.6565 69.428 60.8823 76.8636 44.4965 76.8636ZM44.4965 18.779C27.5754 18.779 13.8094 26.7728 13.8094 36.6017V57.2435C13.8117 57.8954 13.8725 58.5452 13.9906 59.1828C15.7206 68.2361 28.8193 75.0567 44.4718 75.0567C60.1243 75.0567 73.256 68.2361 74.953 59.1828C75.103 58.5495 75.1914 57.8991 75.2167 57.2435V36.6017C75.2167 26.8011 61.4177 18.779 44.4965 18.779V18.779Z" fill="#7B413B" />
        <path d="M75.9753 36.6016C75.9753 40.6252 75.9946 44.6426 76.033 48.6536C76.033 51.9741 76.4779 55.9095 73.405 57.8299C73.2564 57.922 73.0946 57.9829 72.9272 58.0096C70.3157 58.3029 69.9697 52.8728 66.8227 55.7487C65.0845 57.338 64.549 60.1476 63.3298 62.172C62.2315 64.1375 60.6278 65.6616 58.7411 66.5331C54.3419 68.3494 51.7304 64.187 48.0315 62.5315C46.9112 61.9771 45.6561 61.8967 44.4891 62.3045C43.0309 62.9099 42.0176 64.4519 40.7901 65.502C37.5937 68.217 33.1286 67.1196 30.5171 63.9411C29.2238 62.3612 27.9056 60.5827 26.0685 60.0719C23.6712 59.4097 21.2904 60.8855 18.8931 59.9962C16.4901 58.9239 14.5555 56.801 13.5136 54.0932C13.3241 53.6296 13.1429 53.1472 12.9863 52.6931V36.611C12.9863 26.2712 27.0736 17.8896 44.4561 17.8896C61.8387 17.8896 75.9753 26.2618 75.9753 36.6016Z" fill="white" />
        <path d="M75.4442 36.6016C75.4442 41.3316 75.5348 46.1468 75.543 50.9146C75.543 52.5985 75.4771 54.4527 74.5874 55.8717C74.1673 56.5622 73.3599 57.4893 72.5691 57.4137C72.0466 57.2859 71.5799 56.951 71.251 56.4676C70.7182 55.6631 70.0518 54.9879 69.2903 54.481C68.8195 54.3083 68.3169 54.2848 67.8354 54.413C67.354 54.5412 66.9117 54.8164 66.5552 55.2095C65.2618 56.3636 64.5863 58.0475 63.886 59.7408C63.1457 61.6385 62.0351 63.3152 60.6402 64.6411C59.941 65.3277 59.1185 65.8287 58.2314 66.1083C57.3442 66.3879 56.4143 66.4393 55.5078 66.2588C54.0023 65.7508 52.5859 64.944 51.3228 63.8749C48.5548 61.8788 45.4737 60.3084 42.6068 62.9951C41.1487 64.3573 39.9871 65.8331 38.0594 66.3155C36.3395 66.6808 34.5624 66.3462 33.0341 65.3695C31.4688 64.4235 30.472 62.7869 29.1622 61.4436C27.9661 60.1037 26.3679 59.3419 24.6971 59.3151C22.6211 59.3151 20.578 60.1854 18.5844 59.2111C16.9132 58.319 15.5233 56.8552 14.6053 55.0203C14.0441 54.1982 13.6855 53.218 13.5673 52.1823V49.8929C13.5673 45.5792 13.5673 41.2654 13.5673 36.9516C13.5673 31.8432 16.7143 28.0024 20.2732 25.382C26.0399 21.125 33.1165 19.2803 39.8718 18.6843C47.4768 17.9031 55.1399 18.97 62.362 21.8156C67.1813 23.8116 72.8903 27.2362 74.8757 33.0635C75.2614 34.1909 75.4625 35.3904 75.4689 36.6016C75.4849 36.7479 75.5469 36.8825 75.6432 36.9801C75.7395 37.0777 75.8636 37.1315 75.992 37.1315C76.1205 37.1315 76.2445 37.0777 76.3408 36.9801C76.4371 36.8825 76.4991 36.7479 76.5151 36.6016C76.4575 30.6039 72.2066 26.1956 67.9722 23.4332C61.5464 19.233 53.9508 17.6248 46.6683 17.341C39.0397 17.0288 31.1393 18.2113 24.0957 21.7021C19.4246 24.0292 14.1193 27.9362 12.7847 34.0001C12.5225 35.5352 12.4284 37.102 12.5046 38.6639V46.4211C12.5046 48.4172 12.4634 50.4227 12.5046 52.4188C12.6363 53.4759 12.9866 54.4815 13.5261 55.3514C14.3753 57.0851 15.5728 58.5609 17.0191 59.6557C18.6681 60.7654 20.6113 61.1519 22.4892 60.7436C23.5758 60.5074 24.6883 60.4723 25.7845 60.6395C26.8676 60.9518 27.8525 61.6074 28.6267 62.5315C29.8871 63.9032 30.9169 65.4263 32.4739 66.3912C33.91 67.3016 35.5398 67.731 37.1779 67.6305C38.7335 67.5189 40.221 66.8581 41.437 65.7385C43.2659 64.0641 44.617 62.0774 47.2037 62.9005C50.4166 63.8938 52.6986 67.3088 56.1257 67.6305C59.5528 67.9521 62.7162 64.7925 64.2815 61.5004C65.1547 59.6084 65.7314 57.3947 67.2719 56.1082C68.45 55.1622 69.1585 55.7298 70.0152 56.7987C70.5814 57.7115 71.4149 58.3596 72.3631 58.6245C73.7059 58.8327 74.9416 57.4893 75.6007 56.269C76.2786 54.8177 76.6057 53.1845 76.5481 51.539C76.5975 49.278 76.5481 46.9982 76.4904 44.7372C76.4904 42.0316 76.4904 39.3261 76.4904 36.6205C76.4765 36.4738 76.4164 36.3379 76.3214 36.2385C76.2264 36.1391 76.1031 36.0829 75.9746 36.0806C75.8461 36.0783 75.7212 36.13 75.6236 36.2259C75.5259 36.3218 75.4621 36.4554 75.4442 36.6016V36.6016Z" fill="#7B413B" />
        <path d="M71.9214 27.4253C71.9214 23.3102 70.4056 14.7583 65.5615 13.4528C60.215 12.0054 55.8734 16.2057 53.8221 18.722C47.6352 17.5995 41.3331 17.5995 35.1462 18.722C33.0949 16.2057 28.7452 12.0054 23.3986 13.4528C18.5628 14.7583 17.0058 23.3102 17.047 27.4253C14.4766 30.1308 13.0103 33.2621 13.0103 36.6015C13.0103 46.9413 27.0975 55.3134 44.4801 55.3134C61.8626 55.3134 75.9581 46.9413 75.9581 36.6015C75.9746 33.2621 74.5082 30.1308 71.9214 27.4253Z" fill="white" />
        <path d="M44.4967 56.3353C26.6529 56.3353 12.1372 47.4807 12.1372 36.6017C12.1372 33.215 13.5377 29.8945 16.1739 26.9809C16.2481 23.1968 17.5991 13.9828 23.2175 12.4597C28.6959 10.9839 33.1445 14.8815 35.4842 17.6343C41.4624 16.6126 47.5393 16.6126 53.5175 17.6343C55.8572 14.8815 60.2975 11.0123 65.7842 12.4597C71.4026 13.9828 72.7537 23.2347 72.8196 26.9809C75.464 29.8945 76.8645 33.215 76.8645 36.6017C76.8645 47.4807 62.3406 56.3353 44.4967 56.3353ZM25.6149 14.1814C24.9437 14.1834 24.275 14.2723 23.6212 14.4463C19.2879 15.6194 17.9122 23.8401 17.9534 27.416V27.8701L17.665 28.1728C15.1936 30.7649 13.9167 33.6786 13.9167 36.6017C13.9167 46.355 27.6332 54.3014 44.4967 54.3014C61.3603 54.3014 75.0851 46.355 75.0851 36.6017C75.0851 33.6786 73.7917 30.7649 71.3367 28.1728L71.0401 27.8701V27.416C71.0401 23.8401 69.7055 15.6194 65.3723 14.4463C60.487 13.1314 56.4503 16.9911 54.4814 19.4223L54.1601 19.8101L53.6905 19.725C47.5952 18.6372 41.3901 18.6372 35.2947 19.725L34.8251 19.8101L34.5038 19.4223C32.815 17.3411 29.5856 14.1814 25.6149 14.1814Z" fill="#7B413B" />
        <path d="M59.9175 38.0773C61.4781 38.0773 62.7432 36.6246 62.7432 34.8326C62.7432 33.0405 61.4781 31.5878 59.9175 31.5878C58.3569 31.5878 57.0918 33.0405 57.0918 34.8326C57.0918 36.6246 58.3569 38.0773 59.9175 38.0773Z" fill="#7D3D42" />
        <path d="M59.9181 38.1532C59.3494 38.1532 58.7936 37.9595 58.3208 37.5967C57.8479 37.234 57.4794 36.7183 57.2618 36.1151C57.0442 35.5118 56.9873 34.8479 57.0982 34.2075C57.2092 33.5671 57.483 32.9788 57.8851 32.5171C58.2872 32.0553 58.7995 31.7409 59.3572 31.6135C59.9149 31.4861 60.493 31.5515 61.0183 31.8014C61.5437 32.0513 61.9927 32.4744 62.3086 33.0174C62.6246 33.5603 62.7932 34.1986 62.7932 34.8516C62.7932 35.7272 62.4903 36.567 61.9511 37.1862C61.4119 37.8053 60.6806 38.1532 59.9181 38.1532ZM59.9181 31.6636C59.3686 31.6617 58.8311 31.8471 58.3734 32.1962C57.9158 32.5454 57.5587 33.0427 57.3473 33.625C57.1359 34.2074 57.0797 34.8487 57.1859 35.4677C57.2921 36.0868 57.5559 36.6557 57.9438 37.1025C58.3318 37.5493 58.8264 37.8539 59.3652 37.9777C59.9039 38.1014 60.4626 38.0389 60.9704 37.7979C61.4781 37.5568 61.9122 37.1482 62.2176 36.6238C62.5231 36.0993 62.6861 35.4825 62.6861 34.8516C62.6883 34.4321 62.6183 34.0163 62.4803 33.628C62.3423 33.2396 62.1388 32.8863 61.8817 32.5884C61.6246 32.2905 61.3188 32.0538 60.9818 31.8918C60.6448 31.7299 60.2834 31.6459 59.9181 31.6447V31.6636Z" fill="#D53D2C" />
        <path d="M28.7861 38.0773C30.3467 38.0773 31.6118 36.6246 31.6118 34.8326C31.6118 33.0405 30.3467 31.5878 28.7861 31.5878C27.2256 31.5878 25.9604 33.0405 25.9604 34.8326C25.9604 36.6246 27.2256 38.0773 28.7861 38.0773Z" fill="#7D3D42" />
        <path d="M28.7868 38.1531C28.2185 38.1513 27.6635 37.956 27.1917 37.5921C26.72 37.2282 26.3528 36.7119 26.1364 36.1085C25.9201 35.5051 25.8643 34.8415 25.9762 34.2017C26.088 33.5619 26.3625 32.9745 26.7649 32.5137C27.1674 32.0529 27.6797 31.7394 28.2372 31.6128C28.7947 31.4862 29.3723 31.5521 29.8972 31.8023C30.4221 32.0524 30.8706 32.4756 31.1862 33.0183C31.5017 33.5611 31.6702 34.199 31.6702 34.8516C31.668 35.7281 31.3632 36.5678 30.8227 37.1867C30.2822 37.8056 29.5501 38.1531 28.7868 38.1531V38.1531ZM28.7868 31.6636C28.2367 31.6617 27.6984 31.8476 27.2405 32.1976C26.7825 32.5476 26.4254 33.0459 26.2145 33.6294C26.0036 34.2129 25.9484 34.8552 26.0559 35.4747C26.1634 36.0943 26.4288 36.6632 26.8184 37.1092C27.208 37.5552 27.7042 37.8583 28.2441 37.9799C28.7839 38.1016 29.3431 38.0363 29.8506 37.7924C30.358 37.5485 30.791 37.1369 31.0944 36.6099C31.3978 36.083 31.5581 35.4644 31.5548 34.8327C31.5548 33.9888 31.2635 33.1793 30.7446 32.5817C30.2257 31.9841 29.5217 31.6471 28.7868 31.6446V31.6636Z" fill="#D53D2C" />
        <path d="M50.6085 39.5722C50.4851 39.5376 50.3548 39.5597 50.2455 39.634C50.1362 39.7082 50.0565 39.8287 50.0235 39.9695C49.694 41.4169 47.9722 41.7102 46.8601 41.4453C46.3156 41.3321 45.8199 41.0123 45.4525 40.5372C45.085 40.0621 44.8671 39.4591 44.8335 38.8249C44.8335 38.8249 44.8335 38.7681 44.8335 38.7397V38.6357L44.7841 38.5411L44.7346 38.4654L44.644 38.3897H44.5864H44.4793H44.4216H44.3227H44.2651H44.158H44.1003L44.0097 38.4654V38.5316L43.952 38.6357V38.7397C43.952 38.7397 43.952 38.787 43.952 38.8249C43.9184 39.4591 43.7005 40.0621 43.333 40.5372C42.9656 41.0123 42.4699 41.3321 41.9254 41.4453C40.8133 41.7102 39.0915 41.4453 38.762 39.9695C38.7292 39.8278 38.6487 39.7068 38.5383 39.6332C38.4278 39.5595 38.2964 39.5393 38.173 39.5769C38.0495 39.6146 37.9441 39.707 37.88 39.8338C37.8159 39.9607 37.7983 40.1116 37.8311 40.2533C38.243 42.0508 39.8412 42.6278 41.1758 42.6278C41.4933 42.627 41.8102 42.5953 42.1231 42.5332C42.6018 42.4184 43.0546 42.191 43.453 41.8654C43.8515 41.5398 44.1868 41.123 44.4381 40.6412C44.6873 41.1248 45.0221 41.5431 45.4209 41.869C45.8196 42.1949 46.2734 42.4212 46.753 42.5332C47.0631 42.5958 47.3773 42.6274 47.6921 42.6278C49.0267 42.6278 50.6249 42.0508 51.0368 40.2533C51.0524 40.1758 51.0534 40.0953 51.0396 40.0174C51.0259 39.9394 50.9978 39.8657 50.9572 39.8012C50.9167 39.7366 50.8646 39.6829 50.8044 39.6434C50.7443 39.6039 50.6774 39.5796 50.6085 39.5722V39.5722Z" fill="#7D3D42" />
        <path d="M69.4913 37.0653C69.3781 37.0654 69.2684 37.0201 69.1811 36.9372C69.0939 36.8543 69.0346 36.739 69.0135 36.6112C68.9942 36.4661 69.0245 36.318 69.0983 36.1981C69.172 36.0781 69.2834 35.9956 69.4089 35.968L72.7454 35.3152C72.8076 35.303 72.8714 35.3052 72.9329 35.3215C72.9944 35.3377 73.0525 35.3679 73.1038 35.4101C73.1551 35.4523 73.1987 35.5058 73.2319 35.5674C73.2651 35.6291 73.2874 35.6977 73.2973 35.7693C73.3092 35.8402 73.3085 35.9131 73.2953 35.9837C73.2821 36.0543 73.2567 36.1212 73.2206 36.1803C73.1844 36.2394 73.1384 36.2896 73.085 36.3279C73.0317 36.3661 72.9722 36.3917 72.9101 36.4031L69.5407 37.0937L69.4913 37.0653Z" fill="#7D3D42" />
        <path d="M72.7445 41.0858C72.6954 41.0948 72.6453 41.0948 72.5962 41.0858L69.3421 39.856C69.2821 39.8336 69.2265 39.7979 69.1785 39.7508C69.1304 39.7038 69.091 39.6464 69.0623 39.5818C69.0336 39.5172 69.0163 39.4468 69.0113 39.3745C69.0063 39.3023 69.0137 39.2296 69.0332 39.1607C69.0527 39.0917 69.0838 39.0279 69.1248 38.9727C69.1657 38.9176 69.2158 38.8722 69.272 38.8393C69.3282 38.8063 69.3895 38.7864 69.4525 38.7807C69.5154 38.775 69.5787 38.7836 69.6387 38.8059L72.934 40.0073C73.0585 40.0362 73.168 40.1207 73.2383 40.2422C73.3086 40.3637 73.3339 40.5123 73.3088 40.6554C73.2837 40.7984 73.2101 40.9241 73.1043 41.0048C72.9985 41.0855 72.869 41.1146 72.7445 41.0858V41.0858Z" fill="#7D3D42" />
        <path d="M19.3383 37.0652H19.2477L15.903 36.3651C15.7786 36.3397 15.668 36.2588 15.5954 36.14C15.5229 36.0212 15.4942 35.8743 15.5158 35.7313C15.5399 35.5871 15.6117 35.4593 15.7162 35.3746C15.8206 35.2899 15.9496 35.255 16.076 35.2772L19.4454 35.9678C19.5721 35.9803 19.6893 36.0502 19.7712 36.162C19.8531 36.2737 19.8929 36.4183 19.882 36.5638C19.8711 36.7093 19.8103 36.8439 19.7129 36.9379C19.6156 37.0319 19.4897 37.0777 19.363 37.0652H19.3383Z" fill="#7D3D42" />
        <path d="M16.0754 41.0855C15.9748 41.0852 15.8769 41.0485 15.7955 40.9806C15.7142 40.9126 15.6536 40.8169 15.6223 40.7071C15.5911 40.5765 15.6023 40.4373 15.6538 40.3155C15.7054 40.1936 15.7937 40.0975 15.9024 40.0449L19.1977 38.8435C19.3179 38.7987 19.4486 38.8103 19.5613 38.8759C19.674 38.9415 19.7595 39.0557 19.7991 39.1935C19.8384 39.3328 19.8285 39.4842 19.7714 39.6152C19.7144 39.7461 19.6149 39.8461 19.4943 39.8935L16.199 41.095C16.1576 41.0981 16.1161 41.0949 16.0754 41.0855V41.0855Z" fill="#7D3D42" />
        <path d="M63.0333 41.9275C64.6257 41.9275 65.9166 41.1397 65.9166 40.1679C65.9166 39.1962 64.6257 38.4084 63.0333 38.4084C61.4408 38.4084 60.1499 39.1962 60.1499 40.1679C60.1499 41.1397 61.4408 41.9275 63.0333 41.9275Z" fill="#F397B7" />
        <path d="M25.8287 41.9275C27.4211 41.9275 28.712 41.1397 28.712 40.1679C28.712 39.1962 27.4211 38.4084 25.8287 38.4084C24.2362 38.4084 22.9453 39.1962 22.9453 40.1679C22.9453 41.1397 24.2362 41.9275 25.8287 41.9275Z" fill="#F397B7" />
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="89.5" height="89.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx="0.5" dy="0.5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </Svg>
  );
};

export default Icon;

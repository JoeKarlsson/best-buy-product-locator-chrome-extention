import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { COLORS } from '../../../constants/styles';

const ImageContainer = styled.div`
  ${(props) => {
    if (props.isPopup) {
      return css`
        text-align: center;
      `;
    }
    return css`
      position: absolute;

      @media (max-width: 1390px) {
        position: initial;
      }
    `;
  }};
`;

const width = 152;
const height = 90;

const Logo = ({ isPopup }) => (
  <ImageContainer isPopup={isPopup}>
    <svg
      width={isPopup ? `${width}px` : `${width / 2}px`}
      height={isPopup ? `${height}px` : `${height / 2}px`}
      viewBox="0 0 152 90"
      version="1.1"
    >
      <defs />
      <g id="Sticker-Sheets" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Logos" transform="translate(-147.000000, -501.000000)">
          <g id="Logos-/-BestBuy---black" transform="translate(146.993127, 501.730735)">
            <g id="Page-1">
              <polygon
                id="Fill-1"
                fill="#FFED00"
                points="121.628489 64.5962912 114.06549 71.7445424 114.06549 81.7509506 121.621888 88.8472321 151.992704 88.8472321 151.992704 64.5962912"
              />
              <g id="Group-20" transform="translate(0.000000, 0.152444)">
                <path
                  d="M20.9588718,29.5312125 C20.2440375,30.20318 19.3457609,30.5390771 18.2635209,30.5390771 L12.4168192,30.5390771 L12.4168192,23.6666116 L18.2635209,23.6666116 C19.3457609,23.6666116 20.2440375,23.9976582 20.9588718,24.6595782 C21.6737061,25.3211518 22.0308626,26.1304923 22.0308626,27.0877732 C22.0308626,28.0448807 21.6737061,28.8592451 20.9588718,29.5312125 Z M12.4168192,10.0869439 L16.9914112,10.0869439 C17.9072329,10.0869439 18.6554203,10.3559734 19.2354523,10.8938592 C19.8154843,11.431745 20.1054135,12.0962635 20.1054135,12.8879344 C20.1054135,13.6794321 19.8154843,14.3441238 19.2354523,14.8821828 C18.6554203,15.4198954 17.9072329,15.6887517 16.9914112,15.6887517 L12.4168192,15.6887517 L12.4168192,10.0869439 Z M27.2511506,19.16119 L27.8400421,18.9475948 C28.2149175,18.7698586 28.6653586,18.4625448 29.1918866,18.0265195 C29.7184146,17.5906674 30.2447689,17.0879477 30.7711232,16.5183604 C31.2978249,15.9487731 31.7529563,15.1881108 32.1366912,14.2360269 C32.5202523,13.2837699 32.7120329,12.2830078 32.7120329,11.2327013 C32.7120329,8.47415264 31.4630272,6.0982738 28.9643209,4.105238 C26.4657883,2.11220219 23.0573403,1.11542444 18.7386295,1.11542444 L6.94857143e-05,1.11542444 L6.94857143e-05,39.3959169 L19.8361563,39.3959169 C24.9211209,39.3959169 35.4537655,38.4516285 35.4537655,28.4511101 C35.4537655,20.802911 27.4295552,19.2323884 27.2511506,19.16119 Z"
                  id="Fill-2"
                  fill={isPopup ? COLORS.black : COLORS.white}
                />
                <path
                  d="M30.8270592,71.9063932 C30.1122249,72.5783606 29.2139483,72.9142578 28.1315346,72.9142578 L22.3209655,72.9142578 L22.3209655,66.041619 L28.1315346,66.041619 C29.2139483,66.041619 30.1122249,66.3724924 30.8270592,67.0344124 C31.5418935,67.6961592 31.8992238,68.5054997 31.8992238,69.4627806 C31.8992238,70.4198881 31.5418935,71.2344257 30.8270592,71.9063932 Z M22.3209655,52.4603922 L26.8604672,52.4603922 C27.7768101,52.4603922 28.5253449,52.7294217 29.1057243,53.2678272 C29.6861038,53.8058862 29.9762066,54.4709244 29.9762066,55.2629418 C29.9762066,56.0549592 29.6861038,56.7199974 29.1057243,57.2582296 C28.5253449,57.7964619 27.7768101,58.0654914 26.8604672,58.0654914 L22.3209655,58.0654914 L22.3209655,52.4603922 Z M37.1191643,61.5363706 L37.7080558,61.3226022 C38.0829312,61.144866 38.5333723,60.8375522 39.0599003,60.4015269 C39.5864283,59.9656748 40.1127826,59.4629551 40.6391369,58.8935411 C41.1658386,58.3239538 41.6209701,57.5631182 42.0047049,56.6112076 C42.3882661,55.6587772 42.5800466,54.6580152 42.5800466,53.6078819 C42.5800466,50.84916 41.3310409,48.4732812 38.8325083,46.4804186 C36.3338021,44.4872096 32.9253541,43.4904318 28.6066432,43.4904318 L9.90438949,43.4904318 L9.90438949,81.7709243 L29.7039963,81.7709243 C34.7891346,81.7709243 45.3216055,80.8266359 45.3216055,70.8261175 C45.3216055,63.1779184 37.2975689,61.6073958 37.1191643,61.5363706 Z"
                  id="Fill-4"
                  fill={isPopup ? COLORS.black : COLORS.white}
                />
                <polygon
                  id="Fill-6"
                  fill={isPopup ? COLORS.black : COLORS.white}
                  points="67.2407351 30.106222 48.6854437 30.106222 48.6854437 24.0997439 63.8368037 24.0997439 63.8368037 15.3437252 48.6854437 15.3437252 48.6854437 10.4320743 67.2865957 10.4320743 67.2865957 1.11530318 36.2685202 1.11530318 36.2685202 39.3959689 67.2407351 39.3959689"
                />
                <polygon
                  id="Fill-8"
                  fill={isPopup ? COLORS.black : COLORS.white}
                  points="98.9843456 1.11530318 98.9843456 10.4319011 109.129955 10.4319011 109.129955 39.3961421 121.470618 39.3961421 121.470618 10.4319011 131.616227 10.4319011 131.616227 1.11530318"
                />
                <path
                  d="M84.9527653,29.4921314 C84.274411,30.0795616 83.3334007,30.3730168 82.1285184,30.3730168 C80.9241573,30.3730168 79.6701138,30.0438757 78.3676041,29.3854204 C77.0649207,28.726965 76.1946121,28.1972211 75.7573733,27.7972281 C75.5096567,27.5701207 75.295467,27.3702108 75.1078555,27.191955 L67.7847561,34.1283432 L68.248747,34.590873 C68.6948453,35.0535761 69.382059,35.6053205 70.3100407,36.2459329 C71.2381961,36.8867186 72.3131401,37.5273311 73.5357413,38.1679435 C74.7581687,38.8087292 76.284075,39.3557963 78.1132864,39.810011 C79.9423241,40.2635328 81.8297298,40.4904669 83.7748087,40.4904669 C88.6292544,40.4904669 92.4930075,39.2357465 95.3660681,36.7264789 C98.2393024,34.2170381 99.6759195,31.1917119 99.6759195,27.650154 C99.6759195,25.6037627 99.2610898,23.8061327 98.4312567,22.2577838 C97.6014235,20.7096082 96.5660864,19.5439291 95.3259401,18.7607466 C94.0856201,17.9775641 92.742635,17.2749345 91.2969847,16.6518185 C89.9788407,16.0837903 88.746859,15.6543478 87.5993024,15.3601996 C87.4884727,15.3317895 87.377643,15.303033 87.2683767,15.2772214 C86.0280567,14.9835929 84.9975835,14.6099312 84.1764361,14.156063 C83.3556361,13.7021948 82.9449755,13.1816322 82.9449755,12.594202 C82.9449755,11.8825643 83.2307355,11.2951341 83.8017344,10.8322579 C84.372907,10.3695548 85.1846738,10.1382899 86.2377298,10.1382899 C88.744427,10.1382899 90.277803,11.2603145 91.0680293,12.0746788 L98.4168384,5.11403806 L98.2837733,4.95951499 C97.9625755,4.55016743 97.4094693,4.08296034 96.624107,3.55806695 C95.8390921,3.03300033 94.9244864,2.5036029 93.8804635,1.96970143 C92.8364407,1.43579997 91.4799058,0.97742772 89.8115538,0.594931148 C88.1428544,0.212261345 86.3982418,0.0208398268 84.5780635,0.0208398268 C79.9735927,0.0208398268 76.2661824,1.23571684 73.4554853,3.66495118 C70.6447881,6.09418552 69.2390921,8.94610629 69.2390921,12.2205403 C69.2390921,13.9646415 69.5517778,15.53066 70.176107,16.9187692 C70.8007835,18.3070516 71.5948315,19.4105403 72.5585984,20.228889 C73.5221915,21.0475841 74.597483,21.7682298 75.7844727,22.3913458 C76.7808978,22.9143337 77.7840978,23.347414 78.7932041,23.7011541 C78.9858533,23.7687146 79.1785024,23.8383539 79.371499,23.8996781 C80.5760338,24.2821747 81.6647013,24.6379935 82.6373275,24.9673078 C83.6097801,25.2964489 84.4086921,25.6481101 85.0330213,26.0217718 C85.6576978,26.3956068 85.9700361,26.8402937 85.9700361,27.3565255 C85.9700361,28.1930635 85.6309458,28.9048744 84.9527653,29.4921314"
                  id="Fill-10"
                  fill={isPopup ? COLORS.black : COLORS.white}
                />
                <path
                  d="M67.286283,66.238428 C67.286283,68.7653653 65.2418395,70.8190323 62.7078693,70.8377414 C60.1474944,70.8564505 58.061707,68.7918698 58.061707,66.238428 L58.061707,43.5039613 L45.6364453,43.5039613 L45.6364453,65.6606988 C45.6364453,74.7980014 53.0642944,82.2052346 62.2270281,82.2052346 L63.0050944,82.2052346 C72.1678281,82.2052346 79.5956773,74.7980014 79.5956773,65.6606988 L79.5956773,43.5039613 L67.286283,43.5039613 L67.286283,66.238428 Z"
                  id="Fill-12"
                  fill={isPopup ? COLORS.black : COLORS.white}
                />
                <polygon
                  id="Fill-14"
                  fill={isPopup ? COLORS.black : COLORS.white}
                  points="100.817952 56.5231883 92.6811749 43.5039266 80.2409737 43.5039266 94.6095771 68.1167495 94.6095771 81.7844191 107.026327 81.7844191 107.026327 68.1167495 121.39493 43.5039266 108.954729 43.5039266"
                />
                <path
                  d="M120.103556,76.5511973 C120.103556,77.378554 119.430934,78.0493089 118.601101,78.0493089 C117.771441,78.0493089 117.09882,77.378554 117.09882,76.5511973 C117.09882,75.7238406 117.771441,75.0530857 118.601101,75.0530857 C119.430934,75.0530857 120.103556,75.7238406 120.103556,76.5511973"
                  id="Fill-16"
                  fill="#0F2027"
                />
                <path
                  d="M123.459976,54.1956586 L123.958363,54.1956586 L124.891208,56.4797244 L125.8145,54.1956586 L126.313407,54.1956586 L126.313407,57.0964308 L125.962504,57.0964308 L125.962504,54.6379202 L124.93759,57.0964308 L124.807825,57.0964308 L123.782911,54.6379202 L123.782911,57.0964308 L123.459976,57.0964308 L123.459976,54.1956586 Z M121.6497,54.4811451 L120.744822,54.4811451 L120.744822,54.1956586 L122.905654,54.1956586 L122.905654,54.4811451 L122.009809,54.4811451 L122.009809,57.0964308 L121.6497,57.0964308 L121.6497,54.4811451 Z"
                  id="Fill-18"
                  fill="#FFFFFF"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </ImageContainer>
);

Logo.propTypes = {
  isPopup: PropTypes.bool,
};

Logo.defaultProps = {
  isPopup: false,
};

export default Logo;

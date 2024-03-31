/* eslint-disable max-lines */
import { FC } from "react";

export enum Icons { House, RoundPlus, ReactPlus, Moon, Clipboard, Copyright, Family, Job, Sport, Statistics, Compare, Exit, Clock, Calendar, Edit, TrashBin, Star, Settings, Profile, Sun, Facebook, Twitter, Check }

interface IIcon{
    icon: Icons,
    width: number,
    height: number,
    color: string,
}

export const Icon: FC<IIcon> = ({icon, width, height, color}) => {
    switch (icon) {
        case Icons.House:
            return (
                <svg width={width.toString()} height={height.toString()} viewBox="0 0 18 18" fill="none" stroke={color} xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M2.25 6.75L9 1.5L15.75 6.75V15C15.75 15.3978 15.592 15.7794 15.3107 16.0607C15.0294 16.342 14.6478 16.5 14.25 16.5H3.75C3.35218 16.5 2.97064 16.342 2.68934 16.0607C2.40804 15.7794 2.25 15.3978 2.25 15V6.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="Vector_2" d="M6.75 16.5V9H11.25V16.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case Icons.RoundPlus:
            return (
                <svg width={width.toString()} height={height.toString()} viewBox="0 0 20 20" fill="none" stroke={color} xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="Vector_2" d="M10 6.3999V13.5999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="Vector_3" d="M6.40002 10H13.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case Icons.Moon:
            return (
                <svg width={width.toString()} height={height.toString()} viewBox="0 0 25 24" fill="none" stroke={color} xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M21.5 12.79C21.3427 14.4922 20.7039 16.1144 19.6582 17.4668C18.6126 18.8192 17.2035 19.8458 15.5957 20.4265C13.9879 21.0073 12.248 21.1181 10.5795 20.7461C8.91102 20.3741 7.38299 19.5345 6.17423 18.3258C4.96546 17.117 4.12594 15.589 3.75391 13.9205C3.38188 12.252 3.49272 10.5121 4.07346 8.9043C4.6542 7.29651 5.68083 5.88737 7.03321 4.84175C8.3856 3.79614 10.0078 3.15731 11.71 3C10.7134 4.34827 10.2338 6.00945 10.3585 7.68141C10.4832 9.35338 11.2039 10.9251 12.3894 12.1106C13.5749 13.2961 15.1466 14.0168 16.8186 14.1415C18.4906 14.2662 20.1517 13.7866 21.5 12.79V12.79Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case Icons.Clipboard:
            return (
                <svg width={width.toString()} height={height.toString()} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_929_115)">
                        <rect width={width.toString()} height={height.toString()} rx="12" fill={color}/>
                        <g clipPath="url(#clip1_929_115)">
                            <path d="M39.25 11.25H31.935C31.2 9.22 29.275 7.75 27 7.75C24.725 7.75 22.8 9.22 22.065 11.25H14.75C12.825 11.25 11.25 12.825 11.25 14.75V39.25C11.25 41.175 12.825 42.75 14.75 42.75H39.25C41.175 42.75 42.75 41.175 42.75 39.25V14.75C42.75 12.825 41.175 11.25 39.25 11.25ZM27 11.25C27.9625 11.25 28.75 12.0375 28.75 13C28.75 13.9625 27.9625 14.75 27 14.75C26.0375 14.75 25.25 13.9625 25.25 13C25.25 12.0375 26.0375 11.25 27 11.25ZM30.5 35.75H18.25V32.25H30.5V35.75ZM35.75 28.75H18.25V25.25H35.75V28.75ZM35.75 21.75H18.25V18.25H35.75V21.75Z" fill="white"/>
                        </g>
                    </g>
                </svg>
            );
        case Icons.Copyright:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 24 24" fill="none">
                    <path d="M10.08 10.86C10.13 10.53 10.24 10.24 10.38 9.99C10.52 9.74 10.72 9.53 10.97 9.37C11.21 9.22 11.51 9.15 11.88 9.14C12.11 9.15 12.32 9.19 12.51 9.27C12.71 9.36 12.89 9.48 13.03 9.63C13.17 9.78 13.28 9.96 13.37 10.16C13.46 10.36 13.5 10.58 13.51 10.8H15.3C15.28 10.33 15.19 9.9 15.02 9.51C14.85 9.12 14.62 8.78 14.32 8.5C14.02 8.22 13.66 8 13.24 7.84C12.82 7.68 12.36 7.61 11.85 7.61C11.2 7.61 10.63 7.72 10.15 7.95C9.67 8.18 9.27 8.48 8.95 8.87C8.63 9.26 8.39 9.71 8.24 10.23C8.09 10.75 8 11.29 8 11.87V12.14C8 12.72 8.08 13.26 8.23 13.78C8.38 14.3 8.62 14.75 8.94 15.13C9.26 15.51 9.66 15.82 10.14 16.04C10.62 16.26 11.19 16.38 11.84 16.38C12.31 16.38 12.75 16.3 13.16 16.15C13.57 16 13.93 15.79 14.24 15.52C14.55 15.25 14.8 14.94 14.98 14.58C15.16 14.22 15.27 13.84 15.28 13.43H13.49C13.48 13.64 13.43 13.83 13.34 14.01C13.25 14.19 13.13 14.34 12.98 14.47C12.83 14.6 12.66 14.7 12.46 14.77C12.27 14.84 12.07 14.86 11.86 14.87C11.5 14.86 11.2 14.79 10.97 14.64C10.72 14.48 10.52 14.27 10.38 14.02C10.24 13.77 10.13 13.47 10.08 13.14C10.03 12.81 10 12.47 10 12.14V11.87C10 11.52 10.03 11.19 10.08 10.86ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill={color}/>
                </svg>
            );
        case Icons.ReactPlus:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 18 18" fill="none">
                    <path d="M14.25 2.25H3.75C2.92157 2.25 2.25 2.92157 2.25 3.75V14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H14.25C15.0784 15.75 15.75 15.0784 15.75 14.25V3.75C15.75 2.92157 15.0784 2.25 14.25 2.25Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 6V12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case Icons.Family:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 18 18" fill="none">
                    <path d="M12.75 15.75V14.25C12.75 13.4544 12.4339 12.6913 11.8713 12.1287C11.3087 11.5661 10.5456 11.25 9.75 11.25H3.75C2.95435 11.25 2.19129 11.5661 1.62868 12.1287C1.06607 12.6913 0.75 13.4544 0.75 14.25V15.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.75 8.25C8.40685 8.25 9.75 6.90685 9.75 5.25C9.75 3.59315 8.40685 2.25 6.75 2.25C5.09315 2.25 3.75 3.59315 3.75 5.25C3.75 6.90685 5.09315 8.25 6.75 8.25Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.25 15.75V14.25C17.2495 13.5853 17.0283 12.9396 16.621 12.4143C16.2138 11.8889 15.6436 11.5137 15 11.3475" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2.34753C12.6453 2.51276 13.2173 2.88806 13.6257 3.41427C14.0342 3.94047 14.2559 4.58766 14.2559 5.25378C14.2559 5.91991 14.0342 6.56709 13.6257 7.0933C13.2173 7.61951 12.6453 7.99481 12 8.16003" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case Icons.Job:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 18 18" fill="none">
                    <path d="M15 5.25H3C2.17157 5.25 1.5 5.92157 1.5 6.75V14.25C1.5 15.0784 2.17157 15.75 3 15.75H15C15.8284 15.75 16.5 15.0784 16.5 14.25V6.75C16.5 5.92157 15.8284 5.25 15 5.25Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15.75V3.75C12 3.35218 11.842 2.97064 11.5607 2.68934C11.2794 2.40804 10.8978 2.25 10.5 2.25H7.5C7.10218 2.25 6.72064 2.40804 6.43934 2.68934C6.15804 2.97064 6 3.35218 6 3.75V15.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case Icons.Sport:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 18 18" fill="none">
                    <path d="M9.75 1.5L2.25 10.5H9L8.25 16.5L15.75 7.5H9L9.75 1.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case Icons.Statistics:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 18 18" fill="none">
                    <path d="M13.5 15V7.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 15V3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.5 15V10.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case Icons.Compare:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 18 18" fill="none">
                    <path d="M17.25 4.5L10.125 11.625L6.375 7.875L0.75 13.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.75 4.5H17.25V9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case Icons.Exit:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 18 18" fill="none">
                    <path d="M11.25 2.25H14.25C14.6478 2.25 15.0294 2.40804 15.3107 2.68934C15.592 2.97064 15.75 3.35218 15.75 3.75V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H11.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 12.75L11.25 9L7.5 5.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.25 9H2.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case Icons.Clock:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case Icons.Calendar:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 24 24" fill="none">
                    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2V6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 2V6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 10H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case Icons.Edit:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 18 18" fill="none">
                    <g clipPath="url(#clip0_948_566)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.54159 3.04159C1.92839 2.6548 2.45299 2.4375 3 2.4375H8.25C8.56066 2.4375 8.8125 2.68934 8.8125 3C8.8125 3.31066 8.56066 3.5625 8.25 3.5625H3C2.75136 3.5625 2.5129 3.66127 2.33709 3.83709C2.16127 4.0129 2.0625 4.25136 2.0625 4.5V15C2.0625 15.2486 2.16127 15.4871 2.33709 15.6629C2.5129 15.8387 2.75136 15.9375 3 15.9375H13.5C13.7486 15.9375 13.9871 15.8387 14.1629 15.6629C14.3387 15.4871 14.4375 15.2486 14.4375 15V9.75C14.4375 9.43934 14.6893 9.1875 15 9.1875C15.3107 9.1875 15.5625 9.43934 15.5625 9.75V15C15.5625 15.547 15.3452 16.0716 14.9584 16.4584C14.5716 16.8452 14.047 17.0625 13.5 17.0625H3C2.45299 17.0625 1.92839 16.8452 1.54159 16.4584C1.1548 16.0716 0.9375 15.547 0.9375 15V4.5C0.9375 3.95299 1.1548 3.42839 1.54159 3.04159Z" fill={color}/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 1.97144C14.7272 1.97144 14.4656 2.07979 14.2727 2.27267L7.25791 9.2875L6.77308 11.2268L8.71242 10.742L15.7272 3.72718C15.9201 3.5343 16.0285 3.2727 16.0285 2.99993C16.0285 2.72715 15.9201 2.46555 15.7272 2.27267C15.5344 2.07979 15.2728 1.97144 15 1.97144ZM13.4772 1.47718C13.8811 1.07332 14.4289 0.846436 15 0.846436C15.5711 0.846436 16.1189 1.07332 16.5227 1.47718C16.9266 1.88104 17.1535 2.42878 17.1535 2.99993C17.1535 3.57107 16.9266 4.11882 16.5227 4.52267L9.39774 11.6477C9.32565 11.7198 9.23533 11.7709 9.13642 11.7956L6.13642 12.5456C5.94474 12.5936 5.74196 12.5374 5.60225 12.3977C5.46254 12.258 5.40637 12.0552 5.45429 11.8635L6.20429 8.8635C6.22902 8.76459 6.28016 8.67427 6.35225 8.60218L13.4772 1.47718Z" fill={color}/>
                    </g>
                    <defs>
                    <clipPath id="clip0_948_566">
                    <rect width={width.toString()} height={height.toString()} fill='white'/>
                    </clipPath>
                    </defs>
                </svg>
            );
        case Icons.TrashBin:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 18 18" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.6875 4.5C1.6875 4.18934 1.93934 3.9375 2.25 3.9375H15.75C16.0607 3.9375 16.3125 4.18934 16.3125 4.5C16.3125 4.81066 16.0607 5.0625 15.75 5.0625H2.25C1.93934 5.0625 1.6875 4.81066 1.6875 4.5Z" fill={color}/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 2.0625C7.25136 2.0625 7.0129 2.16127 6.83709 2.33709C6.66127 2.5129 6.5625 2.75136 6.5625 3V3.9375H11.4375V3C11.4375 2.75136 11.3387 2.5129 11.1629 2.33709C10.9871 2.16127 10.7486 2.0625 10.5 2.0625H7.5ZM12.5625 3.9375V3C12.5625 2.45299 12.3452 1.92839 11.9584 1.54159C11.5716 1.1548 11.047 0.9375 10.5 0.9375H7.5C6.95299 0.9375 6.42839 1.1548 6.04159 1.54159C5.6548 1.92839 5.4375 2.45299 5.4375 3V3.9375H3.75C3.43934 3.9375 3.1875 4.18934 3.1875 4.5V15C3.1875 15.547 3.4048 16.0716 3.79159 16.4584C4.17839 16.8452 4.70299 17.0625 5.25 17.0625H12.75C13.297 17.0625 13.8216 16.8452 14.2084 16.4584C14.5952 16.0716 14.8125 15.547 14.8125 15V4.5C14.8125 4.18934 14.5607 3.9375 14.25 3.9375H12.5625ZM4.3125 5.0625V15C4.3125 15.2486 4.41127 15.4871 4.58709 15.6629C4.7629 15.8387 5.00136 15.9375 5.25 15.9375H12.75C12.9986 15.9375 13.2371 15.8387 13.4129 15.6629C13.5887 15.4871 13.6875 15.2486 13.6875 15V5.0625H4.3125Z" fill={color}/>
                </svg>
            );
        case Icons.Star:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 18 17" fill="none">
                    <path d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case Icons.Settings:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 18 18" fill="none">
                    <g clipPath="url(#clip0_303_2829)">
                    <path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.55 11.25C14.4502 11.4762 14.4204 11.7271 14.4645 11.9704C14.5086 12.2137 14.6246 12.4382 14.7975 12.615L14.8425 12.66C14.982 12.7993 15.0926 12.9647 15.1681 13.1468C15.2436 13.3289 15.2824 13.5241 15.2824 13.7213C15.2824 13.9184 15.2436 14.1136 15.1681 14.2957C15.0926 14.4778 14.982 14.6432 14.8425 14.7825C14.7032 14.922 14.5378 15.0326 14.3557 15.1081C14.1736 15.1836 13.9784 15.2224 13.7812 15.2224C13.5841 15.2224 13.3889 15.1836 13.2068 15.1081C13.0247 15.0326 12.8593 14.922 12.72 14.7825L12.675 14.7375C12.4982 14.5646 12.2737 14.4486 12.0304 14.4045C11.7871 14.3604 11.5362 14.3902 11.31 14.49C11.0882 14.5851 10.899 14.7429 10.7657 14.9442C10.6325 15.1454 10.561 15.3812 10.56 15.6225V15.75C10.56 16.1478 10.402 16.5294 10.1207 16.8107C9.83936 17.092 9.45782 17.25 9.06 17.25C8.66218 17.25 8.28064 17.092 7.99934 16.8107C7.71804 16.5294 7.56 16.1478 7.56 15.75V15.6825C7.55419 15.4343 7.47384 15.1935 7.32938 14.9915C7.18493 14.7896 6.98305 14.6357 6.75 14.55C6.52379 14.4502 6.27286 14.4204 6.02956 14.4645C5.78626 14.5086 5.56176 14.6246 5.385 14.7975L5.34 14.8425C5.20069 14.982 5.03526 15.0926 4.85316 15.1681C4.67106 15.2436 4.47587 15.2824 4.27875 15.2824C4.08163 15.2824 3.88644 15.2436 3.70434 15.1681C3.52224 15.0926 3.35681 14.982 3.2175 14.8425C3.07804 14.7032 2.9674 14.5378 2.89191 14.3557C2.81642 14.1736 2.77757 13.9784 2.77757 13.7812C2.77757 13.5841 2.81642 13.3889 2.89191 13.2068C2.9674 13.0247 3.07804 12.8593 3.2175 12.72L3.2625 12.675C3.4354 12.4982 3.55139 12.2737 3.5955 12.0304C3.63962 11.7871 3.60984 11.5362 3.51 11.31C3.41493 11.0882 3.25707 10.899 3.05585 10.7657C2.85463 10.6325 2.61884 10.561 2.3775 10.56H2.25C1.85218 10.56 1.47064 10.402 1.18934 10.1207C0.908035 9.83936 0.75 9.45782 0.75 9.06C0.75 8.66218 0.908035 8.28064 1.18934 7.99934C1.47064 7.71804 1.85218 7.56 2.25 7.56H2.3175C2.56575 7.55419 2.8065 7.47384 3.00847 7.32938C3.21045 7.18493 3.36429 6.98305 3.45 6.75C3.54984 6.52379 3.57962 6.27286 3.5355 6.02956C3.49139 5.78626 3.3754 5.56176 3.2025 5.385L3.1575 5.34C3.01804 5.20069 2.9074 5.03526 2.83191 4.85316C2.75642 4.67106 2.71757 4.47587 2.71757 4.27875C2.71757 4.08163 2.75642 3.88644 2.83191 3.70434C2.9074 3.52224 3.01804 3.35681 3.1575 3.2175C3.29681 3.07804 3.46224 2.9674 3.64434 2.89191C3.82644 2.81642 4.02163 2.77757 4.21875 2.77757C4.41587 2.77757 4.61106 2.81642 4.79316 2.89191C4.97526 2.9674 5.14069 3.07804 5.28 3.2175L5.325 3.2625C5.50176 3.4354 5.72626 3.55139 5.96956 3.5955C6.21285 3.63962 6.46379 3.60984 6.69 3.51H6.75C6.97183 3.41493 7.16101 3.25707 7.29427 3.05585C7.42753 2.85463 7.49904 2.61884 7.5 2.3775V2.25C7.5 1.85218 7.65804 1.47064 7.93934 1.18934C8.22064 0.908035 8.60218 0.75 9 0.75C9.39782 0.75 9.77936 0.908035 10.0607 1.18934C10.342 1.47064 10.5 1.85218 10.5 2.25V2.3175C10.501 2.55884 10.5725 2.79463 10.7057 2.99585C10.839 3.19707 11.0282 3.35493 11.25 3.45C11.4762 3.54984 11.7271 3.57962 11.9704 3.5355C12.2137 3.49139 12.4382 3.3754 12.615 3.2025L12.66 3.1575C12.7993 3.01804 12.9647 2.9074 13.1468 2.83191C13.3289 2.75642 13.5241 2.71757 13.7213 2.71757C13.9184 2.71757 14.1136 2.75642 14.2957 2.83191C14.4778 2.9074 14.6432 3.01804 14.7825 3.1575C14.922 3.29681 15.0326 3.46224 15.1081 3.64434C15.1836 3.82644 15.2224 4.02163 15.2224 4.21875C15.2224 4.41587 15.1836 4.61106 15.1081 4.79316C15.0326 4.97526 14.922 5.14069 14.7825 5.28L14.7375 5.325C14.5646 5.50176 14.4486 5.72626 14.4045 5.96956C14.3604 6.21285 14.3902 6.46379 14.49 6.69V6.75C14.5851 6.97183 14.7429 7.16101 14.9442 7.29427C15.1454 7.42753 15.3812 7.49904 15.6225 7.5H15.75C16.1478 7.5 16.5294 7.65804 16.8107 7.93934C17.092 8.22064 17.25 8.60218 17.25 9C17.25 9.39782 17.092 9.77936 16.8107 10.0607C16.5294 10.342 16.1478 10.5 15.75 10.5H15.6825C15.4412 10.501 15.2054 10.5725 15.0042 10.7057C14.8029 10.839 14.6451 11.0282 14.55 11.25V11.25Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_303_2829">
                    <rect width={width.toString()} height={height.toString()} fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            );
        case Icons.Profile:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 18 18" fill="none">
                    <path d="M15 15.75V14.25C15 13.4544 14.6839 12.6913 14.1213 12.1287C13.5587 11.5661 12.7956 11.25 12 11.25H6C5.20435 11.25 4.44129 11.5661 3.87868 12.1287C3.31607 12.6913 3 13.4544 3 14.25V15.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case Icons.Sun:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_303_5260)">
                    <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 1V3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 21V23" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.22 4.21997L5.64 5.63997" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.36 18.3601L19.78 19.7801" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 12H3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12H23" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.22 19.7801L5.64 18.3601" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.36 5.63997L19.78 4.21997" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_303_5260">
                    <rect width={width.toString()} height={height.toString()} fill="white"/>
                    </clipPath>
                </defs>
                </svg>
            );
        case Icons.Facebook:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 32 32" fill="none">
                    <g clipPath="url(#clip0_303_3677)">
                    <path d="M28 0H4C1.794 0 0 1.794 0 4V28C0 30.206 1.794 32 4 32H28C30.206 32 32 30.206 32 28V4C32 1.794 30.206 0 28 0Z" fill={color}/>
                    <path d="M27 16H22V12C22 10.896 22.896 11 24 11H26V6H22C18.686 6 16 8.686 16 12V16H12V21H16V32H22V21H25L27 16Z" fill="#FAFAFA"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_303_3677">
                    <rect width={width.toString()} height={height.toString()} fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            );
        case Icons.Twitter:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 32 32" fill="none">
                <g clipPath="url(#clip0_303_3680)">
                    <path d="M32 0H0V32H32V0Z" fill={color}/>
                    <path d="M4.23937 23.7208C6.36905 25.0714 8.89531 25.8531 11.6034 25.8531C19.2113 25.8531 25.3785 19.6852 25.3785 12.078C25.3785 11.888 25.3745 11.6995 25.3672 11.5115C25.6424 11.295 27.3443 9.93087 27.7615 9.05393C27.7615 9.05393 26.3794 9.6283 25.0267 9.76361C25.0241 9.76361 25.0208 9.76424 25.0181 9.76424C25.0181 9.76424 25.0208 9.76291 25.0254 9.75961C25.15 9.67633 26.8925 8.49016 27.1285 7.07683C27.1285 7.07683 26.1509 7.59861 24.7822 8.05509C24.5556 8.13037 24.3184 8.20437 24.0738 8.27298C23.1915 7.33137 21.9375 6.74365 20.5454 6.74365C17.8753 6.74365 15.7116 8.90668 15.7116 11.5748C15.7116 11.9513 15.7549 12.3177 15.8369 12.6696C15.4637 12.6543 9.78159 12.3357 5.91601 7.65451C5.91601 7.65451 3.60573 10.8084 7.29275 14.0516C7.29275 14.0516 6.17195 14.007 5.20499 13.4292C5.20499 13.4292 4.84984 17.2501 9.02528 18.2271C9.02528 18.2271 8.20367 18.5383 6.89294 18.3164C6.89294 18.3164 7.62593 21.4037 11.3356 21.6922C11.3356 21.6922 8.40218 24.3422 4.23804 23.7204L4.23937 23.7208Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_303_3680">
                    <rect width={width.toString()} height={height.toString()} rx="6" fill="white"/>
                    </clipPath>
                </defs>
                </svg>
            );
        case Icons.Check:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width={width.toString()} height={height.toString()} viewBox="0 0 15 9" fill="none">
                    <g clipPath="url(#clip0_982_549)">
                        <path d="M14.2857 0.692261L6.42855 8.30765L2.85712 4.84611" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_982_549">
                        <rect width="15" height="9" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            );
        default:
            return <div/>;
    }
};

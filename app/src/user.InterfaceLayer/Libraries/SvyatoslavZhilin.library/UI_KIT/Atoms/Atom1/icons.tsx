import React, {FC} from "react";

export enum Icons { House, RoundPlus, ReactPlus, Moon, Clipboard, Copyright, Family, Job, Sport, Statistics, Compare, Exit, Clock, Calendar, Edit, TrashBin, Star, Settings, Profile, Sun }

interface IIcon{
    icon: Icons;
    width: number;
    height: number;
    color: string;
}
       
export const Icon:FC <IIcon> = ({icon, width, height, color}) => {
    switch (icon) 
        {
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

            default:
            return <div/>;
        }
    };
import React from 'react'

const UserInfoBox = ({ heading, children, backgroundColor = 'bg-gray-100', textColor = 'text-gray-800', buttonInfo }) => {
    return ( 
        <div className={`${backgroundColor}p-6 rounded-lg shadow-md`}>
            <h1>{`${heading}`}</h1>
            <p className={`${textColor} mt-2 mb-4`}>
              {children}
            </p>
            <a
              href={buttonInfo.link}
              className={`${buttonInfo.backgroundColor} inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
            >
              {buttonInfo.text}
            </a>
          </div>
     );
}
 
export default UserInfoBox;
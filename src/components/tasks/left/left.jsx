import Users from '@components/users'
import React from 'react'

export default function Left() {
    const users = [
        {
          id: 1,
          img: 'https://www.opticalexpress.co.uk/media/1064/man-with-glasses-smiling-looking-into-distance.jpg'
        },
        {
          id: 2,
          img: 'https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg'
        },
        {
          id: 3,
          img: 'https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg'
        },
        {
          id: 4,
          img: 'https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg'
        },
        {
          id: 5,
          img: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
        },
        {
          id: 6,
          img: 'https://t3.ftcdn.net/jpg/04/60/91/88/360_F_460918802_XVCymFr7MoziFpnInbTDvrlblYhvAOi2.jpg'
        },
        {
          id: 7,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfDL6Fi7sMxGHAhOoS-IlDEIsOn_ph7l6u1ZyXPtVnxdPx8LtLW-CQQICJsOrgpGSGFA&usqp=CAU'
        }
      ]

    return (
        <div>
            <Users data={users} />
        </div>
    )
}
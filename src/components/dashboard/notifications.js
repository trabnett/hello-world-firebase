import React from 'react';
import { isDeclareModule } from '@babel/types';
import moment from 'moment'

const Notifications = (props) => {
    const {notifications} = props
    return(
        <div>
            <div>
                <span>Notifications</span>
                <ul>
                    {notifications && notifications.map(item => {
                        return(
                            <li key={item.id}>
                                <span>{item.user}</span>
                                <span>{item.content}</span>
                                <div>{moment(item.time.toDate()).fromNow()}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Notifications;
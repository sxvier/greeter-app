// import react component 
import React from 'react';

// define class
class Timestamp extends React.Component {
constructor() {
    super()
    this.state = {
       date: new Date() 
    }
}

    getMonthName(dayOfMonth) {
        const months = [
        'January',
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'
    ]
    return months[dayOfMonth]
    }

    getSuffix(day) {
        let suffix = 'th'
        if (day === 1 || day === 21 || day === 31) {
            suffix = 'st'
        } else if (day === 2 || day ===22) {
            suffix = 'nd'
        } else if (day === 3 || day === 23) {
            suffix = 'rd'
        }
        return suffix
    }

    updateTime = () => {
        this.setState({
            date: new Date()
        })
    }

    // render function needed to do something
    render() {
        const date = this.state.date;
        const time = date.toLocaleTimeString();
        const month = this.getMonthName(date.getMonth());
        const day = date.getDate();
        const suffix = this.getSuffix(day)
        
        
        
        return (
            <div>
                <div>{month} {day}{suffix}, {time}</div>
                <button onClick={this.updateTime}>⏱</button>
            </div>
        )
    }
}

// export it to app to work and display on page
export default Timestamp
import React from 'react';

const timeUnits = {
  year: 31536000,
  month: 2592000,
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

class TimeElapsed extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.date !== nextProps.date;
  }

  _getTimeElapsed(secondsElapsed) {
    let timeElapsed = '0 seconds';

    for (const unit in timeUnits) {
      if (!timeUnits.hasOwnProperty(unit)) continue;

      const numSecondsInUnit = timeUnits[unit];

      if (secondsElapsed < numSecondsInUnit) {
        continue;
      } else {
        const numUnits = Math.floor(secondsElapsed / numSecondsInUnit);
        const isPlural = numUnits === 1 ? '' : 's';

        timeElapsed = `${numUnits} ${unit}${isPlural}`;

        break;
      }
    }

    return timeElapsed;
  }

  render() {
    const { date, className } = this.props;

    const currentTime = (new Date()).getTime();
    const pastTime = date.getTime();

    const secondsElapsed = (currentTime - pastTime) / 1000;
    const timeElapsed = this._getTimeElapsed(secondsElapsed);

    return (
      <span className={className}>{timeElapsed}</span>
    );
  }
}

TimeElapsed.propTypes = {
  className: React.PropTypes.string,
  date: React.PropTypes.instanceOf(Date),
};

export default TimeElapsed;

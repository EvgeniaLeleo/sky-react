const formatHours = (count, interval) =>
  `${Math.floor(count / interval / 60 / 60) % 24 < 10 ? 0 : ''}` +
  `${Math.floor(count / interval / 60 / 60) % 24}`;

const formatMinutes = (count, interval) =>
  `${Math.floor(count / interval / 60) % 60 < 10 ? 0 : ''}` +
  `${Math.floor(count / interval / 60) % 60}`;

const formatSeconds = (count, interval) =>
  `${Math.floor(count / interval) % 60 < 10 ? 0 : ''}` +
  `${Math.floor(count / interval) % 60}`;

const formatSantiseconds = (count, interval) =>
  `${count % interval < 10 ? 0 : ''}${count % interval}`;

export { formatHours, formatMinutes, formatSeconds, formatSantiseconds };

function formatDate(data) {
  return new Intl.DateTimeFormat().format(new Date(date));
}

export default formatDate;

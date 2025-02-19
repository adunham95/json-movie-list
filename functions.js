export function formatDate(date){
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;
  }

export function convertToID(string){
    return string.split(' ').join('-').toLowerCase();
}

export function stringToArray(string){
  if(typeof string === 'string'){
    return [string]
  }
  if(typeof string === "undefined"){
    return []
  }

  return string
}
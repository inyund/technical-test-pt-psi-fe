const colors = ['merah', 'kuning', 'hijau', 'pink', 'ungu', 'maroon'];
const apparels = ['baju', 'celana', 'topi', 'jaket', 'sepatu'];
const statuses = ['diskon', 'sale', 'diskon', 'sale', 'sale'];

const result: string[] = [];

colors.forEach((color, index) => {
  const apparel = apparels[index % apparels.length];
  const status = statuses[index % statuses.length];
  result.push(`${apparel} ${color} ${status}`);
});

console.log(result);

var fs = require('fs');

fs.readdir('./', 'utf8', function(err, data) {
    fs.writeFile('./dir.txt', data, function(err){
        if (err) throw err;
        fs.readFile('./dir.txt', 'utf8', function(err, data){
            var fileContent = '';
            for (var i = 0; i < data.length; i++){
                if (data[i] == ','){
                    fileContent = fileContent.concat('\n');
                } else {
                    fileContent = fileContent.concat(data[i]);
                }
            }
            console.log(fileContent);
        });
    });
});

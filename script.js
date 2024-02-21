// var chance = 3;
// alert('tebak angka 1-10' + '\n kamu punya ' + chance + ' kesempatan');

// const angkaRandom = Math.floor(Math.random() * 10) + 1;

// for(chance; chance > 0; chance--){
//     const angkaTebakan = parseInt(prompt('masukkan angka tebakan'));

//     if(angkaTebakan == angkaRandom){
//         alert('tebakan benar');
//         break;
//     }else if(angkaTebakan > angkaRandom){
//         alert(`Tebakan Terlalu Besar, kesempatan tersisa ${chance - 1}`);
//     }else if(angkaTebakan < angkaRandom){
//         alert(`Tebakan Terlalu Kecil, kesempatan tersisa ${chance - 1}`);
//     }
//     if(chance == 1){
//         alert(`kesempatan habis, angka yang benar adalah ${angkaRandom}`);
//         break;
//     }
// }

function checkAge() {
    var name = prompt('Enter your name:');
    if (name !== null && name.trim() !== '') {
        var age = parseInt(prompt(`Hello, ${name}! Please enter your age:`));
        if (!isNaN(age)) {
            if (age >= 13) {
                alert(`Thank you, ${name}! You can proceed to select a studio.`);
                var studio = prompt(`Thank you, ${name} ! You can proceed to select a studio. Please enter the studio name(A,B,C): `);

                if (studio !== null && studio.trim() !== '') {
                    if (studio === 'A') {
                        alert(`Thank you, ${name} ! You have selected studio A, Umur ${age} .`);
                    }else if(studio === 'B') { 
                        alert(`Thank you, ${name} ! You have selected studio B, Umur ${age} .`);
                    }else if(studio === 'C') { 
                        alert(`Thank you, ${name} ! You have selected studio C, Umur ${age} .`);
                    }else {
                        alert(`Invalid studio. Please enter a valid studio(A, B, C).`);
                    }
                } else {
                    alert('Studio cannot be empty. Please enter the studio name.');
                }

            } else {
                alert(`Sorry,  ${name} , you cannot buy tickets if you are under 13 years old.`);
            }
        } else {
            alert(`Invalid age. Please enter a valid age.`);
        }
    } else {
        alert('Name cannot be empty. Please enter your name.');
    }
}
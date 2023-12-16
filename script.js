
class matrix_calc{
    constructor(){
        this.dimension = 2;
        this.matrix_amount = 1;
        this.matrix_size = new Array();
    }
    change_dimension(){
        var section = document.getElementById("matrix_input");
        var dimension_select = document.getElementById("dimension");
        this.dimension = document.getElementById("dimension").value;
        console.log(this.dimension);
        const new_matrix = this.generate_null_matrix(this.dimension, this.dimension);
        section.innerHTML = '';
        section.appendChild(new_matrix);
        this.matrix_size[0] = [this.dimension, this.dimension];
        console.log(this.matrix_size)
    }
    generate_null_matrix(r, c){
        const matrix_form = document.createElement("form");
        matrix_form.id = "matrix_1";
        for (let s = 0; s < r ; s++ ){
            const row = document.createElement("div");
            for (let i = 0; i < c; i++ ){
                const input = document.createElement("input");
                input.type = "text";
                input.id = matrix_form.id + `[${s}][${i}]`;
                row.appendChild(input);
            }
            matrix_form.appendChild(row);
        }
        return matrix_form;
    }
    get_determinant(matrix){
        
    }
    calculate(){
        const matrix_in = new Array();
        for (let i=0; i < this.matrix_amount; i++){
            matrix_in[i] = new Array();
            for (let j=0; j < (this.matrix_size[i][0]); j++){
                matrix_in[i][j] = new Array();
                for (let k=0; k < (this.matrix_size[i][1]); k++){
                    let value = document.getElementById(`matrix_${i+1}[${j}][${k}]`).value;
                    matrix_in[i][j][k] = value;
                }
            }
        }
        console.log(matrix_in[0])
    }
}
const matrix_cal = new matrix_calc();
window.onload = function() {matrix_cal.change_dimension()};

// 8a + 7b * 5a -1
class Algebra_calculation{
    constructor(){
        this.equation = new Array();
    }
    analyse_equation(){
        var equation = new Array();
        var chunks = new Array();
        var eq = document.getElementById("equations").value;
        chunks = eq.replace(/\s/g, "").replace(/[\b/]/g, "*1/").split(/([- + ( ) * ])/).filter(Boolean);
        var eq_part = new Array();
        for (let i = 0 , inbracket = 0 ; i< chunks.length; i++){
            if(chunks[i].match(/[- +]/)){
                if (inbracket == 0){
                    equation.push(eq_part);
                    eq_part = new Array();
                    chunks[i] == "-" ? eq_part.push(chunks[i]): eq_part;
                    continue;
                } 
            }else if(chunks[i] == "("){
                inbracket += 1;
                
            }else if(chunks[i] == ")"){
                inbracket -= 1;
            }
            eq_part.push(chunks[i]);
        }
        equation.push(eq_part);
        console.log(equation);
    }
}

const algebra_calculation = new Algebra_calculation();

//use as test : (6a+7b-8a) /2 + (5a * 8b * 7a) / 5 - 5( 4a + 3b )( 4a - 3b)//
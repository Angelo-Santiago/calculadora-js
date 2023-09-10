let expression ='';

function appendNumber(number) {
    expression += number;
    document.getElementById('result').value = expression;
}

function appendOperator(operator) {
    expression += operator;
    document.getElementById('result').value = expression;
}

function clearResult(){
    expression = '';
    document.getElementById('result').value = '0';
}

function aviso(){
    window.alert("Acesse meu github para ver outros projetos")
    
}
function link(){
    window.location.href ='https://github.com/Angelo-Santiago?tab=repositories ' 
}

function calculate(){
    try {
        const result = eval(expression);
        document.getElementById('result').value = result;
        expression = '';
    } catch(error){
        document.getElementById('result').value = 'Error';
    }
}
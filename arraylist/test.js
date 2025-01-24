function fun(param){
    console.log(param.nev)
}

fun({nev:"cirmi"})

function funa(){
    console.log(this.nev)
}

const funb = function(param){
    console.log(param.nev)
}

const func = (param) => {
    console.log(param.nev)
}

const alma = fun
alma({nev:"cirmi"})

const korte = funa.bind({nev:"II. András"})
korte();

const obj = {
    funa:(param) => {
        console.log(param.nev)
    },
    funb:(param) => {
        console.log(param.eletkor)
    }
}

obj.funa({nev:"Imre"})
obj.funa({eletkor:9})
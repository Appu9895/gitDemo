export default class democlass{

    democlass(){
        this.displayName();
    }

    displayName(){
        console.log("this is my display method");
    }

}

const demo=new democlass();
demo.displayName();
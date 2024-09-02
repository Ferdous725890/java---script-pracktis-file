        const age = 10; 
        const price =500;
        if(age <  12){
            console.log('you can it free')

        }
        else if( age >= 60){
            // 50% discount 
            const discount = price * 50 / 100
            const payamount = price -discount
            console.log(payamount)
        }
        else if( age >= 50){
            // 25% discount 
            const discount = price * 25 / 100
            const payamount = price -discount
            console.log(payamount)
        }
        else if(age >= 40){
            // 10 % discount 
            const discount = price * 10 / 100;
            const payamount = price - discount;
            console.log(payamount)
        }
        else{
            console.log('you pay me '+ price)
        }
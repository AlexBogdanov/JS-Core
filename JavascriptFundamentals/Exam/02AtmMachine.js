function atmMachine(data) {
    let insert = (atm, data) => {
        let currAmount = 0;

        data.forEach(banknote => {
            currAmount += banknote;
            atm.banknotes.push(banknote);
        });

        atm.amount += currAmount;

        console.log(`Service Report: ${currAmount}$ inserted. Current balance: ${atm.amount}$.`);

        return atm;
    };

    let withdraw = (atm, data) => {
        const [balance, moneyToWithdraw] = data;

        if (balance < moneyToWithdraw) {
            console.log(`Not enough money in your account. Account balance: ${balance}$.`);
        } else if (atm.amount < moneyToWithdraw) {
            console.log(`ATM machine is out of order!`);
        } else if (balance >= moneyToWithdraw && atm.amount >= moneyToWithdraw) {
            atm.banknotes = atm.banknotes.sort((bank1, bank2) => {
                return bank2 - bank1;
            });

            let currMoney = moneyToWithdraw;
            let banknotesToRemove = [];

            for (let i = 0; i < atm.banknotes.length; i++) {
                let bank = atm.banknotes[i];

                if (currMoney <= 0) {
                    break;
                }

                if (bank <= currMoney) {
                    currMoney -= bank;
                    banknotesToRemove.push(bank);
                }
            }

            atm.amount -= moneyToWithdraw;

            banknotesToRemove.forEach(bank => {
                let index = atm.banknotes.indexOf(bank);
                atm.banknotes.splice(index, 1);
            });

            console.log(`You get ${moneyToWithdraw}$. Account balance: ${balance - moneyToWithdraw}$. Thank you!`);
        }

        return atm;
    };

    let report = (atm, data) => {
      let bank = data[0];
      let count = 0;

      atm.banknotes.forEach(banknote => {
          if (banknote === bank) {
              count++;
          }
      });

        console.log(`Service Report: Banknotes from ${bank}$: ${count}.`);

        return atm;
    };

    let atm = {
        amount: 0,
        banknotes: []
    };


    for (let i = 0; i < data.length; i++) {
        let currData = data[i].map(el => {return +el;});

        if (currData.length > 2) {
            atm = insert(atm, currData);
        } else if (currData.length === 2) {
            atm = withdraw(atm, currData);
        } else if (currData.length === 1) {
            atm = report(atm, currData)
        }
    }
}
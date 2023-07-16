import Image from "next/image";
import React from "react";

const TransactionSection = () => {
  return (
    <section>
      <Image
        src="/Home/Business/Images/CreditCard.png"
        width={1408}
        height={1852}
        alt="Imagem de um cartão de credito"
      />
      <div>
        <h1>All transactions are at hand!</h1>
        <p>
          Try to control your expenses directly from our app! You will see that
          it is very easy and convenient!
        </p>
        <div>
          <Image
            src="/Home/Business/SVG/chart-pie.svg"
            width={74}
            height={74}
            alt=""
          />
          <h2>Set limits on spending per month</h2>
          <p>
            Don't want to spend a lot and calculate your budget? Don't worry,
            you can limit your monthly expenses in our app!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransactionSection;

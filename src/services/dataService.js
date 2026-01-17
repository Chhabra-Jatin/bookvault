function getSession(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    return {token, cbid};
}

export async function getUser(){
    const browserData = getSession();
    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${browserData.token}`}
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${browserData.cbid}`, requestOptions);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}

export async function getUserOrders(){
    const browserData = getSession();
    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${browserData.token}`}
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.cbid}`, requestOptions);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();
    return data;
}


function generatePaymentId() {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `PAY_${Date.now()}_${random}`;
}

export async function createOrder(cartList, total, user) {
  const browserData = getSession();

  const order = {
    cartList: cartList,              // already contains qty
    amount_paid: total,
    total_items: cartList.reduce((sum, item) => sum + item.qty, 0),
    paymentId: generatePaymentId(),
    orderDate: new Date().toISOString(),
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`
    },
    body: JSON.stringify(order)
  };

  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders`,
    requestOptions
  );

  if (!response.ok) {
    throw { message: response.statusText, status: response.status };    //eslint-disable-line
  }

  return await response.json();
}

import { useState } from 'react';

const BirthdayInvite = () => {
  const [response, setResponse] = useState(null);

  const handleYes = () => {
    setResponse('yes');
  };

  const handleNo = () => {
    setResponse('no');
  };

  const forceYes = () => {
    setResponse('yes');
  };

  if (response === 'yes') {
    return (
      <div className="card">
        <h2>🎉 Thank you for answering! See you later baby! - penny🥜 🥳</h2>
      </div>
    );
  }

  if (response === 'no') {
    return (
      <div className="card">
        <h2>😢 Are you sure?</h2>
        <p>You have no choice, you have to attend 🤭</p>
        <button onClick={forceYes}>Okay fine 😅 I'll come</button>
      </div>
    );
  }

  return (
    <div className="card">
      <h1>🎂 Happy Birthday, Via my love! 🥳</h1>
      <p>You make every day brighter and lighter. I am so lucky to have you.</p>
      <p>You've been, and will always be, my favorite person to laugh with, dream with, and eat all delicious food with 'til— both our pockets are empty haha.</p>
      <p>To make this day more special, I invite you to an awesome birthday party! 🎈</p>
      <p> Just you & me. 👩🏻‍❤️‍💋‍👩🏻 </p>
      <p>🗓️ Date: May 14<br />📍 Location: My Unit<br />⏰ Time: Whenever you are free</p>
      <p>Can you come and celebrate with me?</p>
      <button onClick={handleYes}>YES</button>
      <button onClick={handleNo}>NO</button>
    </div>
  );
};

export default BirthdayInvite;

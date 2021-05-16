import react from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PaymentIcon from '@material-ui/icons/Payment';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Bottom = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const classes = useStyles();
  return (
    <>
      <video
        className="video"
        controls
        src="https://cdn.shopify.com/s/files/1/0997/6284/files/Homepage_Video_Noise_Wireless_Audio.mp4?v=1617882128"
      ></video>
      {/* <div className=" overlay   ">
          <div className="title"><b>#AudioForAll</b></div>
          <div className="sub"> Play your sound your way</div>
          <button className="watchNo"> Watch Now</button>
        </div> */}
      <div className="row below_video">
        <div className="col-sm grid below_video">
          <ShoppingCartIcon />
          <div className="title_video">
            <b>safe shopping</b>
          </div>
          <div className="sub_video">Safe, private & secure transaction</div>
        </div>
        <div className="col-sm grid below_video">
          <LocalShippingIcon />
          <div className="title_video">
            <b>free shipping</b>
          </div>
          <div className="sub_video">Delivering anywhere in the country</div>
        </div>
        <div className="col-sm grid below_video">
          <PaymentIcon />
          <div className="title_video">
            <b>inclusive pricing</b>
          </div>
          <div className="sub_video">Best deals including GST</div>
        </div>
        <div className="col-sm grid below_video">
          <FileCopyOutlinedIcon />
          <div className="title_video">
            <b>trusted product</b>
          </div>
          <div className="sub_video">
            Beware of counterfeits & shop from official website
          </div>
        </div>
      </div>
      <div className="below4">
        <div className="title_below4">
          <b>Keep up with the noise</b>
        </div>
        <div className="sub_below4">
          <div className="font4">
            Sign up now to hear about our latest offers, new products,
            collaborations, all things Noise - Straight to your inbox.
          </div>
        </div>
        <div className="form_below">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Enter your email" />
          </form>
        </div>
        <Button variant="outlined" color="primary">
          Sign Up
        </Button>
      </div>
      <hr />
      <div className="below4">
        <div className="title_below4">
          <b>Crafted for your inner 'Noise'</b>
        </div>
        <div className="sub_below4">
          <div className="font4">
            Founded in 2018, Noise is the leading Indian connected lifestyle
            brand that is changing the way India remains connected and
          </div>
          <div className="font4">
            building India's largest and most active buoyant lifestyle
            community. With its remarkable range of best-in-class smart
            hearables
          </div>
          <div className="font4">
            and wearables Noise has also been awarded India’s No.1 wearable
            watch brand in 2020 by IDC Worldwide Wearable Device{' '}
          </div>
          <div className="font4">
            Tracker. Smart products with the latest features make Noise the
            right brand for your music and fitness needs.
          </div>
        </div>
      </div>
      <div className="row below_video1">
        <div className="col-sm grid below_video1">
          <ul>
            <div className="title_video1">
              <b>Our Product</b>
            </div>

            <li>
              <div className="sub_video1">Smart Watches</div>
            </li>
            <li>
              <div className="sub_video1">Bluetooth Earphones</div>
            </li>
            <li>
              <div className="sub_video1">Wireless Earbuds</div>
            </li>
            <li>
              <div className="sub_video1">NoiseFit App</div>
            </li>
            <li>
              <div className="sub_video1">Accessories</div>
            </li>
          </ul>
          <ul>
            <div className="title_video1">
              <b>For Business</b>
            </div>

            <li>
              <div className="sub_video1">Corporate Enquiries</div>
            </li>
            <li>
              <div className="sub_video1">Become an Affiliate</div>
            </li>
          </ul>
        </div>
        <div className="col-sm grid below_video1">
          <ul>
            <div className="title_video1">
              <b>Support</b>
            </div>

            <li>
              <div className="sub_video1">FAQ</div>
            </li>
            <li>
              <div className="sub_video1">Track Your Order</div>
            </li>
            <li>
              <div className="sub_video1">Register Your Warranty</div>
            </li>
            <li>
              <div className="sub_video1">Product Support</div>
            </li>
            <li>
              <div className="sub_video1">Warranty Guidelines</div>
            </li>

            <li>
              <div className="sub_video1">Shipping and Returns</div>
            </li>
            <li>
              <div className="sub_video1">Contact Us</div>
            </li>
          </ul>
        </div>
        <div className="col-sm grid below_video1">
        <ul>
            <div className="title_video1">
              <b>About Noise</b>
            </div>

            <li>
              <div className="sub_video1">About Us</div>
            </li>
            <li>
              <div className="sub_video1">Stories</div>
            </li>
            <li>
              <div className="sub_video1">Careers</div>
            </li>
            <li>
              <div className="sub_video1">In the Press</div>
            </li>
            
          </ul>
          <ul>
            <div className="title_video1">
              <b>Legal</b>
            </div>

            <li>
              <div className="sub_video1">Terms & Conditions</div>
            </li>
            <li>
              <div className="sub_video1">Privacy Policy</div>
            </li>
            </ul>
        </div>
        <div className="col-sm grid below_video1">
        <ul>
            <div className="title_video1">
              <b>Follow Us</b>
            </div>

            <li>
              <div className="sub_video1">Join over 650K fans</div>
            </li>
            <li>
              <div className="sub_video1">Join over 420K fans</div>
            </li>
            <li>
              <div className="sub_video1">Watch our product videos</div>
            </li>
           
          </ul>
          </div>
      </div>
    </>
  );
};
export default Bottom;

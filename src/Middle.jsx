import react from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GridSystem from './GridSystem';
const Middle = () => {
  return (
    <>
    <div className='row'></div>
      <div class="carousel slide ">
        <div class="carousel-inner">
          <div class="carousel-item ">
            <img
              class="d-block w-100"
              src="//cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_30x.jpg?v=1619766650"
              data-srcset=" //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_180x.jpg?v=1619766650 180w, //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_360x.jpg?v=1619766650 360w, //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_480x.jpg?v=1619766650 480w, //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_765x.jpg?v=1619766650 765w, //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_900x.jpg?v=1619766650 900w, //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_1000x.jpg?v=1619766650 1000w, //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_1200x.jpg?v=1619766650 1200w, //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_1500x.jpg?v=1619766650 1500w, //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_1900x.jpg?v=1619766650 1900w,"
              alt="img"
              sizes="1117px"
              srcset=" //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_180x.jpg?v=1619766650 180w, //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_360x.jpg?v=1619766650 360w, //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_480x.jpg?v=1619766650 480w, //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_765x.jpg?v=1619766650 765w, //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_900x.jpg?v=1619766650 900w, //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_1000x.jpg?v=1619766650 1000w, //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_1200x.jpg?v=1619766650 1200w, //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_1500x.jpg?v=1619766650 1500w, //cdn.shopify.com/s/files/1/0997/6284/files/Airbuds_Truly_Wireless_Earbuds_Banner_Desktop_a322c619-9f12-4468-a3c2-e0cff19cad15_1900x.jpg?v=1619766650 1900w,"
            ></img>
          </div>
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="//cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_30x.png?v=1619768220"
              data-srcset=" //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_180x.png?v=1619768220 180w, //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_360x.png?v=1619768220 360w, //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_480x.png?v=1619768220 480w, //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_765x.png?v=1619768220 765w, //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_900x.png?v=1619768220 900w, //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_1000x.png?v=1619768220 1000w, //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_1200x.png?v=1619768220 1200w, //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_1500x.png?v=1619768220 1500w, //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_1900x.png?v=1619768220 1900w,"
              alt="img"
              sizes="1117px"
              srcset=" //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_180x.png?v=1619768220 180w, //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_360x.png?v=1619768220 360w, //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_480x.png?v=1619768220 480w, //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_765x.png?v=1619768220 765w, //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_900x.png?v=1619768220 900w, //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_1000x.png?v=1619768220 1000w, //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_1200x.png?v=1619768220 1200w, //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_1500x.png?v=1619768220 1500w, //cdn.shopify.com/s/files/1/0997/6284/files/Noise_ColorFit_Pro_3_Smartwatch_with_Oxymeter_Spo2_Tracking_Blood_Oxygen_Monitor_1_1_1900x.png?v=1619768220 1900w,"
            ></img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* Grid  */}
      <div class="row">
        <div class="col-sm grid border">
          <GridSystem
            title="Wireless Earbuds"
            subtitle="Go Wireless in style"
            link="https://cdn.shopify.com/s/files/1/0997/6284/files/Mask_Group_7_180x.png?v=1612690910"
          />
        </div>
        <div class="col-sm grid border">
          <GridSystem
            title="Smart Watches"
            subtitle="upgrade your lifestyle"
            link="https://cdn.shopify.com/s/files/1/0997/6284/files/Group_76_1_0cad0411-4917-4a06-ba9b-f9fb81bac792_180x.png?v=1612688877"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm grid border">
          <GridSystem
            title="Bluetooth Neckbands"
            subtitle="tune into your inner noise"
            link="https://cdn.shopify.com/s/files/1/0997/6284/files/Mask_Group-3_d51a1e9a-a1f0-4bbf-838d-322f6ee4272b_180x.png?v=1612690782"
          />
        </div>
        <div class="col-sm grid border-top border ">
          <GridSystem
            title="Accessories"
            subtitle="Make the best of your noise gadgets"
            link="https://cdn.shopify.com/s/files/1/0997/6284/files/Noise_Smart_Wearables_Accessories_180x.png?v=1613499955"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm grid black1">
          <div class="black1_title">the best, officially</div>
          <div className="black1_sub">
            
            Isn't that another reason to be a #Noisemaker and join the family
          </div>
          <img
            className="balck1_img"
            src="https://cdn.shopify.com/s/files/1/0997/6284/files/1_2_e923e0eb-e953-44d4-b0c7-a9811c73625e.svg?v=1616501885"
          ></img>
        
        </div> 
        
          
        <div className="col-sm grid black2 ">
          <div>
            <img
              className="balck2_img"
              src="https://i.gadgets360cdn.com/large/noise_colorfit_main_1595314587556.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Middle;

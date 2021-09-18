import React from 'react';
  const [image_url, setimage_url] = useState([])
  
  for ( let i in range(1,53)){
    const url = `https://github.com/team5555555/AIschool-web/blob/main/0916/img/Photo%20%EB%A9%94%EB%89%B4%20%EC%97%90%EC%85%8B/${i}.png?raw=true`
    console.log(url)
  }
  
  
const Photo = () => {
  return <>

    <div id="photo_text_container">
		<main>
			<div class="inside">
				<div class="row">
					<div class="col-dz col-dz-12">
						<div type="widget" id="blank">
							<div class="_widget_data " data-widget-name="여백" data-widget-type="padding">
								<div class="widget padding" data-height="5" style="margin-top: px; 
								margin-bottom: px;">
									<div id="padding_w" style="width: 100%; min-height: 1px; height: 5px;"></div>
								</div>
							</div>
						</div>	
					</div>
				</div>


				<div class="row">
					<div class="col-dz col-dz-12">
						<div id="photo_center">
							<div class="_widget_data" data-widget-name="텍스트" data-widget-type="text">
								<div class="text" id="photo_text">
									<div class="text-table">
										<div class="text_box">
											<p style="text-align: center;">
												<strong>
													<span style="font-size: 60px; color: rgb(0, 0, 0);">
														Photography
													</span>
												</strong>
											</p>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>


				<div class="row">
					<div class="col-dz col-dz-12">
						<div type="widget" id="blank">
							<div class="_widget_data " data-widget-name="여백" data-widget-type="padding">
								<div class="widget padding" data-height="5" style="margin-top: px; 
								margin-bottom: px;">
									<div id="padding_w" style="width: 100%; min-height: 1px; height: 5px;"></div>
								</div>
							</div>
						</div>	
					</div>
				</div>

			</div>
		</main>
	</div>




    <div>
        <main>
            <div class="inside">
                <div class="row">
                    <div class="col-dz-12">
                        <div class="widget_data">
                            <div class="widget_photo_wrap">
                                <div id="container">
                                    <div class="item">
                                        
                                        <div class="item_container">
                                            <img src="https://github.com/team5555555/AIschool-web/blob/main/0916/img/Photo%20%EB%A9%94%EB%89%B4%20%EC%97%90%EC%85%8B/1.png?raw=true"/>
                                            <img src="https://github.com/team5555555/AIschool-web/blob/main/0916/img/Photo%20%EB%A9%94%EB%89%B4%20%EC%97%90%EC%85%8B/2.png?raw=true"/>
											<img src="https://github.com/team5555555/AIschool-web/blob/main/0916/img/Photo%20%EB%A9%94%EB%89%B4%20%EC%97%90%EC%85%8B/3.png?raw=true"/>


                                            


                                            


                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

      </main>
    <div id="sami_footer">h</div>
    </>;
};

export default Photo;

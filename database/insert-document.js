/*
Thêm một danh sách các BỘ sản phẩm vào trong BẢNG "products" của CSDL "ToanDB"
*/
var mongodb = require("mongodb");

var mongoClient = mongodb.MongoClient;

var url = "mongodb+srv://toanhuuvuong:toanhuuvuong123456@toandb-lttzl.azure.mongodb.net/test?retryWrites=true&w=majority/"

mongoClient.connect(url, function(err, db)
{
	if(err) throw err;

	var dbo = db.db("ToanDB");

	var listProducts =
	[
		{ name: "Nike air max", stall: "Nike", image: "img/product/p1.jpg", oldPrice: 150, price: 120, status: "Còn hàng", description: "Bề mặt: Đường. Gót chân / ngón chân: 23 mm / 13 mm. Chênh lệch: 10 mm. Xin lưu ý: Thương hiệu khuyên bạn nên đặt hàng một nửa kích thước lớn hơn trong phong cách này. Lưới thoáng khí và vật liệu tổng hợp trên. Lớp phủ in 3-D cung cấp hỗ trợ thêm để cung cấp cho bạn một tùy chỉnh phù hợp. Công nghệ trên FluidFit" },
		{ name: "Nike air force", stall: "Nike", image: "img/product/p2.jpg", oldPrice: 220, price: 200, status: "Còn hàng", description: "Các biện pháp trục xấp xỉ đỉnh thấp từ vòm, Rãnh flex ở đế ngoài thúc đẩy sự linh hoạt tự nhiên, Vải dệt kim phù hợp với bàn chân của bạn cho một cảm giác tốt,Gót chân tròn thúc đẩy một phạm vi chuyển động tự nhiên" },
		{ name: "Converse chuck 2", stall: "Converse", image: "img/product/p3.jpg", oldPrice: 400, price: 300, status: "Còn ít hàng", description: "..." },
		{ name: "Converse classic", stall: "Converse", image: "img/product/p4.jpg", oldPrice: 190, price: 170, status: "Hết hàng", description: "..." },
		{ name: "Flex Experience Run 8", stall: "Nike", image: "img/product/p10.jpg", oldPrice: 65, price: 59, status: "Hết hàng", description: "Các biện pháp trục xấp xỉ đỉnh thấp từ vòm, Rãnh flex ở đế ngoài thúc đẩy sự linh hoạt tự nhiên, Vải dệt kim phù hợp với bàn chân của bạn cho một cảm giác tốt,Gót chân tròn thúc đẩy một phạm vi chuyển động tự nhiên, lớp phủ không khâu ở dây buộc và đầu ngón chân tăng thêm độ bền, đế giữa của đế được bơm  cung cấp một chuyến đi kiên cường và đủ độ bền để tăng gấp đôi như một đế ngoài. Điều này cho phép giảm cao su và trọng lượng tổng thể" },
		{ name: "680v6 Cushioning Running", stall: "New Balance", image: "img/product/p11.jpg", oldPrice: 74, price: 58, status: "Hết hàng", description: "Dệt may và tổng hợp, nhập khẩu, đế cao su, các biện pháp trục xấp xỉ đỉnh thấp từ vòm, tổng hợp / Lưới trên, hiệu suất chèn NB Đáp ứng 2.0, thiết kế lưới" },
		{ name: "Matflex 6 GS Wrestling", stall: "ASICS", image: "img/product/p12.jpg", oldPrice: 44, price: 41, status: "Hết hàng", description: "Đế ngoài cao su đầy đủ cung cấp lực kéo nổi bật trên tất cả các thảm. Nhập khẩu. Các phép đo: Trọng lượng: 5 oz Các phép đo sản phẩm được thực hiện bằng kích thước 2 Little Kid, chiều rộng M. Xin lưu ý rằng các phép đo có thể thay đổi theo kích thước. Trọng lượng của giày dép dựa trên một mặt hàng, không phải một đôi." },
	    { name: "Ultraboost 19", stall: "Adidas", image: "img/product/p13.jpg", oldPrice: 160, price: 108, status: "Hết hàng", description: "Các biện pháp trục xấp xỉ đỉnh thấp từ vòm, giày chạy bộ của Junenson có đế giữa phản ứng để đệm thêm, phù hợp thường xuyên; Ren đóng cửa, adidas Primeknit phía trên bọc chân trong hỗ trợ thích ứng và thoải mái siêu nhẹ" },
		{ name: "Ultraboost 4.0 ", stall: "Adidas", image: "img/product/p14.jpg", oldPrice: 160, price: 150, status: "Hết hàng", description: "..." },
		{ name: "Ownthegame", stall: "Adidas", image: "img/product/p15.jpg", oldPrice: 55, price: 41, status: "Hết hàng", description: "Các biện pháp trục xấp xỉ giữa đỉnh từ vòm, chất lượng adidas, được nhập khẩu bởi adidas"},
        { name: "Hoops Mid 2.0 ", stall: "Adidas", image: "img/product/16.jpg", oldPrice: 55, price: 53, status: "Hết hàng", description: "Các biện pháp trục xấp xỉ giữa đỉnh từ vòm, giày lấy cảm hứng từ bóng rổ, bền và thoải mái khi chơi cả ngày, phù hợp thường xuyên, Trung tầng, tổng hợp nubuck trên cho độ bền,cao su cupole cung cấp độ bám tuyệt vời" },
        { name: "HVC Wrestling", stall: "Adidas", image: "img/product/p17.jpg", oldPrice: 50, price: 44, status: "Hết hàng", description: "Được thúc đẩy bởi sự theo đuổi không ngừng đổi mới cũng như hàng thập kỷ tích lũy chuyên môn khoa học thể thao, chúng tôi phục vụ cho tất cả, từ các vận động viên và đội tuyển chuyên nghiệp ưu tú cho đến bất kỳ cá nhân nào muốn biến môn thể thao thành cuộc sống của họ" },
	    { name: "Gel Nimbus 20 Trail", stall: "ASICS", image: "img/product/p18.jpg", oldPrice: 119, price: 119, status: "Hết hàng", description: "CÔNG NGHỆ FLYTEFOAM MIDSOLE Công nghệ FlyteFoam của chúng tôi cung cấp khả năng phản hồi và phản hồi đặc biệt bất kể khoảng cách, sử dụng các sợi siêu hữu cơ để giúp giảm việc đóng gói xảy ra theo truyền thống với bọt mềm hơn, mật độ thấp." },
        { name: "Gel Kayano 26 4E Wide", stall: "ASICS", image: "img/product/p19.jpg", oldPrice: 159, price: 159, status: "Hết hàng", description: "Công nghệ IGS (Hệ thống hướng dẫn tác động) - Triết lý thiết kế ASICS sử dụng thành phần được liên kết để tăng cường dáng đi tự nhiên của bàn chân từ cú đánh gót đến bước chân" },
        { name: "Gel-Rocket 8", stall: "ASICS", image: "img/product/p20.jpg", oldPrice: 70, price: 63, status: "Hết hàng", description: "Đóng cửa viền truyền thống cho phù hợp tối ưu. Midsole đúc-EVA cung cấp đệm tăng cường và hấp thụ sốc. Có Hệ thống đệm GEL® phía sau và chân trước cung cấp hỗ trợ giảm xóc ở ngón chân cái và cung cấp chuyển động và hỗ trợ vượt trội trong chu kỳ dáng đi. Được thiết kế với Công nghệ Trusstic System® giúp giảm trọng lượng mà không ảnh hưởng đến tính toàn vẹn cấu trúc của giày. Đế ngoài cao su và cao su chứa hàm lượng cao su tự nhiên nhiều hơn so với soli truyền thống" },
		{ name: "GEL-Nimbus 20", stall: "ASICS", image: "img/product/p21.jpg", oldPrice: 129, price: 122, status: "Hết hàng", description: "Bề mặt: Đường. Gót chân / ngón chân: 23 mm / 13 mm. Chênh lệch: 10 mm. Xin lưu ý: Thương hiệu khuyên bạn nên đặt hàng một nửa kích thước lớn hơn trong phong cách này. Lưới thoáng khí và vật liệu tổng hợp trên. Lớp phủ in 3-D cung cấp hỗ trợ thêm để cung cấp cho bạn một tùy chỉnh phù hợp. Công nghệ trên FluidFit ™ thích ứng với bàn chân cho phù hợp như găng tay. Cấu trúc trên liền mạch làm giảm khả năng kích ứng. Đóng cửa ren với khoen rời để phân tán căng thẳng ren cho phù hợp tùy chỉnh. Gót chân S" },
        { name: "Gel-Nimbus 21", stall: "ASICS", image: "img/product/p22.jpg", oldPrice: 125, price: 119, status: "Hết hàng", description: "Công nghệ hệ thống ly hợp gót chân - Bộ đếm gót chân ngoài xương cung cấp hỗ trợ cải thiện và tạo ra môi trường phù hợp với gót chân được cải thiện." },
	    { name: "Lebron Witness III", stall: "Nike", image: "img/product/p23.jpg", oldPrice: 100, price: 81, status: "Hết hàng", description: "Đan trên mang lại sự kết hợp chiến lược của sức mạnh, kéo dài và gác xép, đơn vị Air-Sole đóng gói toàn bộ chiều dài cung cấp đệm tác động,chi tiết chữ ký tôn vinh quê hương của LeBron" },
        { name: "Air Zoom Pegasus 36", stall: "Nike", image: "img/product/p24.jpg", oldPrice: 160, price: 120, status: "Hết hàng", description: "TÍNH NĂNG ĐẶC BIỆT - Có pít-tông bánh ở đế ngoài giúp hấp thụ tác động và cung cấp lực kéo đa bề mặt. Nó cũng có các vệt gót chân đi xung quanh gân Achilles và sockliner khả năng phục hồi cao thích ứng với đường viền của bàn chân của bạn để được hỗ trợ." },
	    { name: "Kyrie Flytrap", stall: "Nike", image: "img/product/p25.jpg", oldPrice: 80, price: 74, status: "Hết hàng", description: "Màn hình trên in tăng cường độ bền và chống mài mòn, zoom Air đệm mang lại khả năng đáp ứng liên tục, thiết kế không đối xứng, gấp lại cung cấp lối vào dễ dàng." },
        { name: "Lebron 17", stall: "Nike", image: "img/product/p26.jpg", oldPrice: 200, price: 171, status: "Hết hàng", description: "Được thiết kế dành riêng cho Lebron, đơn vị Max Air lớn nhất của Nike Basketball cho đến nay hấp thụ lực mạnh hơn các thiết kế trước đó. Các đơn vị Zoom Air có thể nhìn thấy, âm lượng tối đa dưới bóng của bàn chân cung cấp khả năng phản ứng nhanh, liên tục để tạo ra hành động nhịp độ nhanh." },
        { name: "Jordan Why Not Zer0.2", stall: "Nike", image: "img/product/p27.jpg", oldPrice: 145, price: 145, status: "Hết hàng", description: "Cổ áo hai lớp và bộ đếm gót chân cung cấp hỗ trợ mắt cá chân tuyệt vời, lớp phủ bảng điều khiển viền được gia cố thêm khóa giữa bàn chân, max Volume Zoom Túi midsole đệm hấp thụ đập." },
	    { name: "990v5", stall: "New Balance", image: "img/product/p28.jpg", oldPrice: 174, price: 171, status: "Hết hàng", description: "Với một di sản kéo dài hơn ba thập kỷ, điều này vượt thời gian để thiết lập tiêu chuẩn công nghiệp. Được thiết kế không thỏa hiệp, v5 pha trộn sự kết hợp hoàn hảo giữa đệm và sự ổn định. Kết quả: một chiếc giày trông - và cảm thấy - tốt như vậy vào buổi sáng của bạn khi chạy trên đường băng. Sản xuất tại Mỹ 990v5." },
		{ name: "860v10", stall: "New Balance", image: "img/product/p29.jpg", oldPrice: 129, price: 120, status: "Hết hàng", description: "Thắt dây giày chạy bộ 860v10 mới cho nam giới và trải nghiệm sự hỗ trợ đáng tin cậy và khả năng đáp ứng đặc biệt khi bạn lên đường cho cuộc chạy của mình." }
	]

	dbo.collection("products").insertMany(listProducts, function(err, result)
	{
		if(err) throw err;

		console.log("" + result.insertedCount + ' documents inserted in collection "products" of database "ToanDB"!');

		console.log(result);

		db.close();
	});
});
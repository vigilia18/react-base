const alfabeto=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z",
                "aa","ab","ac","ad","ae","af","ag","ah","ai","aj","ak","al","am","an","ao","ap","aq","ar","as","au","av","aw","ax","ay","az",
                "ba","bb","bc","bd","be","bf","bg","bh","bi","bj","bk","bl","bm","bn","bo","bp","bq","br","bs","bu","bv","bw","bx","by","bz"];

const sectores:string[]=[
    'A01','B01','C01','D01','E01','F01','G01','H01','I01','J01',//1
    'A02','B02','C02','D02','E02','F02','G02','H02','I02','J02',//2
    'A03','B03','C03','D03','E03','F03','G03','H03','I03','J03',//3
    'A04','B04','C04','D04','E04','F04','G04','H04','I04','J04',//4
    'A05','B05','C05','D05','E05','F05','G05','H05','I05','J05',//5
    'A06','B06','C06','D06','E06','F06','G06','H06','I06','J06',//6
    'A07','B07','C07','D07','E07','F07','G07','H07','I07','J07',//7
    'A08','B08','C08','D08','E08','F08','G08','H08','I08','J08',//8
    'A09','B09','C09','D09','E09','F09','G09','H09','I09','J09',//9
    'A10','B10','C10','D10','E10','F10','G10','H10','I10','J10',//10
    'A11','B11','C11','D11','E11','F11','G11','H11','I11','J11',//11
    'A12','B12','C12','D12','E12','F12','G12','H12','I12','J12',//12
    'A13','B13','C13','D13','E13','F13','G13','H13','I13','J13',//13
    'A14','B14','C14','D14','E14','F14','G14','H14','I14','J14',//14
    // 'A15','B15','C15','D15','E15','F15','G15','H15','I15','J15',//15
    // 'A16','B16','C16','D16','E16','F16','G16','H16','I16','J16',//16
    // 'A17','B17','C17','D17','E17','F17','G17','H17','I17','J17',//17
    // 'A18','B18','C18','D18','E18','F18','G18','H18','I18','J18',//18
    // 'A19','B19','C19','D19','E19','F19','G19','H19','I19','J19',//19
    // 'A20','B20','C20','D20','E20','F20','G20','H20','I20','J20',//20
    // 'A21','B21','C21','D21','E21','F21','G21','H21','I21','J21',//21
    // 'A22','B22','C22','D22','E22','F22','G22','H22','I22','J22',//22
    // 'A23','B23','C23','D23','E23','F23','G23','H23','I23','J23',//23
    // 'A24','B24','C24','D24','E24','F24','G24','H24','I24','J24',//24
    // 'A25','B25','C25','D25','E25','F25','G25','H25','I25','J25',//25
    // 'A26','B26','C26','D26','E26','F26','G26','H26','I26','J26',//26
    // 'A27','B27','C27','D27','E27','F27','G27','H27','I27','J27',//27
    // 'A28','B28','C28','D28','E28','F28','G28','H28','I28','J28',//28
    // 'A29','B29','C29','D29','E29','F29','G29','H29','I29','J29',//29
    // 'A30','B30','C30','D30','E30','F30','G30','H30','I30','J30',//30
    // 'A31','B31','C31','D31','E31','F31','G31','H31','I31','J31,'//31
]
const s:string[]=[];

for(let i=0;i<10;i++){
    for(let e=0;e<75;e++){
        s.push(alfabeto[e]+i);
    }
}

export {sectores,s};
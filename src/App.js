import React,{useEffect,useState} from "react";
import axios from "axios";

function App() {

  const [veri,setVeri]=useState("");
  const [tarih,setTarih]=useState("");

  useEffect(()=>{

    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res=>setVeri(res.data[tarih]))
    .catch(err=>console.log(err))



  },[veri,tarih])


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h1 className="text-center display-5 text-dark fw-bold">Türkiye Covid-19 Günlük Vaka Bilgileri</h1>
            <input type="text" placeholder="GG/AA/YYYY" className="form-control mt-5"
            onChange={(e)=>setTarih(e.target.value)}
            />
            
            <table className="table table-striped text-dark mt-4">
              <thead>
                <tr>
                  <th scope="col">Tarih</th>
                  <th scope="col">Günlük Test Sayısı</th>
                  <th scope="col">Pozitif Vaka Sayısı</th>
                  <th scope="col">Vefat Sayısı</th>
                  <th scope="col">İyileşen Hasta Sayısı</th>
                </tr>
              </thead>
              <tbody  className={veri===undefined ? "bg-danger":"bg-success"}>
                <tr>
                  <th className="text-white" scope="row">{veri===undefined ? "Tarih bekleniyor" : veri.date}</th>
                  <td className="text-white">{veri===undefined ? "Veri bekleniyor" : veri.tests}</td>
                  <td className="text-white">{veri===undefined ? "Veri bekleniyor" : veri.cases}</td>
                  <td className="text-white">{veri===undefined ? "Veri bekleniyor" : veri.deaths}</td>
                  <td className="text-white">{veri===undefined ? "Veri bekleniyor" : veri.recovered}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

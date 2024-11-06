for (let i = 1; i <= 1000; i++) {
  document.write(`&nbspCASE ${i}{
    <br>&nbsp&nbspASSIGN global:ura_cabal_${i}="URA:1.Consorcio,Dt_Aces:{global:DataHora},M_Id:{global:mid},Id_Ch:{global:mid},Tel:{global:tel},Tp_Ch:{global:tipoCh},Mn:{global:menuRelatorio},Opc:{global:opcaoRelatorio},CPF_CNPJ:{global:doc},Cod_Serv:{global:skill},Serv:{global:sname},Id_Ag:{global:agentid},Nm_Ag:{global:nomeagente},Mt_Desc:{global:motivoDesc},Per_1_Hum:,Perg_2_Hum:,Per_1_Elet:,Per_2_Elet:,Prot:{global:protocoloura},Sis:{global:sistema}"
    <br>&nbsp&nbspglobal:ura_cabal_${i}.savetodb(1)
    <br>&nbsp}
    `);
  document.write("<br>")
}

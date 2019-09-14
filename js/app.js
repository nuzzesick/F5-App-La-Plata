
const app = new Vue ({
  el: '#app',
  data: function(){
    return {
    name: 'FútbolYa!',
    version: '0.9.0',
    instagram: 'getfutbolya',
    complejos: [
      /*
      {
        name: '',
        id: '',
        search: '',
        rate: '4.0',
        location: '',
        canchas: '',
        futbol: 'F',
        cesped: '',
        infraestructura: '',
        background: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        image6: '',
        map: '',
        reserva: 'https://api.whatsapp.com/send?phone=549'
      },
      */
      {
        name: 'CRISFA',
        id: 'crisfa',
        search: 'crisfa c.r.i.s.f.a',
        rate: '4.1',
        location: 'Av. 72 n°901 e/ 14 y 15',
        canchas: '2',
        futbol: 'F5',
        cesped: 'Sintético',
        infraestructura: 'Abierto',
        background: 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/36732355_2077386942531068_5286234937484115968_n.jpg?_nc_cat=108&_nc_oc=AQkdLVYkg4nbnC9dcqt5Itv-3txE-rLJqjFVK0uf-nts8POfiZYVVETg3dIpZFENkTKrH58_dZ6dhcU5eaFF-h3E&_nc_ht=scontent.faep5-1.fna&oh=5e73e591ec2a8cef5215c0665bc45cad&oe=5DD895BE',
        image1: 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/19756707_1894912597445171_8253320347393010209_n.jpg?_nc_cat=111&_nc_oc=AQmyIwzQoAdRc1p7fxWEV2oFsy1yqLbOUmK29brXl4-RQpedMa10X_9kq3ToGkSLO4KJ1-YcvB45aVZE4MzdaG9_&_nc_ht=scontent.faep5-1.fna&oh=b9c5a5f6e8b9521cb628736276d03d1a&oe=5E0A8543',
        image2: 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/17991968_1856806404589124_4972588083195136106_n.jpg?_nc_cat=107&_nc_oc=AQkjdixpxRoPcvHyN8R3wOHCzjf95vGyFlwQoJd54iMCQhaJ-EhTApSw_nciwSlalKeMwJmSyGz-dIaqaOKCZjkS&_nc_ht=scontent.faep5-1.fna&oh=8397491e5c8436def252f49a8ba44d0b&oe=5E04EB4B',
        image3: 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/14199304_1746776845592081_1201061338650482176_n.jpg?_nc_cat=111&_nc_oc=AQk0ruXuoxUWioTuC2yZgmJ5kYtCUMwIpUpzQ441z3dddVgmKCxobZG6cZbEqdwvVw5qSlwXnVoJQwpkA00NBt9W&_nc_ht=scontent.faep5-1.fna&oh=93e3ba6077a978256ff3cc80b6a0acbc&oe=5E152E9A',
        image4: 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/15219646_1786990674904031_7622258795220009361_n.jpg?_nc_cat=101&_nc_oc=AQnkfVExZ17oYEcIvvWvBmk1-2Zxz7y5vTmsYXlkrXBn6YbKIfuF6lJf7tAV0_l8VytWMtgDj57wykpJsxy6jKrz&_nc_ht=scontent.faep5-1.fna&oh=477809174dbbc4db0223341196f2a494&oe=5E1563EE',
        image5: 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/15977104_1809653649304400_7719710568044572744_n.jpg?_nc_cat=104&_nc_oc=AQkJLUqs48wqZ-OP3Gzhlm0jLnQWxoIL7ulkt6sI2CN88QrSZ6deXfn70RkGTHfMBGGaXxaKXxUVkxGnZtcJi1fc&_nc_ht=scontent.faep5-1.fna&oh=cbb48348b6ddf2cb22e469c52a0dc2d6&oe=5E0B0FD4',
        image6: 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/15965955_1810172795919152_695878050902989812_n.jpg?_nc_cat=101&_nc_oc=AQkXis5j6pTLzo2xAkWQ_tqBB0MpFwMTNoplMkxO0GfoJe6Cdgt7ngnowdGk8VskzSslvVEuGznwYJ8zT6DCYZo2&_nc_ht=scontent.faep5-1.fna&oh=83c376d82ee153ea7a273b8311395e0c&oe=5DCB077D',
        map: 'https://goo.gl/maps/7sNjF53gsDbS3WCU9',
        reserva: 'https://api.whatsapp.com/send?phone=5492216798737'
      },
      {
        name: 'Estadio 7',
        id: 'estadioSiete',
        search: 'estadio siete estadio 7',
        rate: '3.9',
        location: 'Av. 7 n°1274 e/ 58 y 59',
        canchas: '3',
        futbol: 'F5',
        cesped: 'Sintético',
        infraestructura: 'Techado',
        background: 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/21462433_897093433774386_4027291876494625314_n.png?_nc_cat=103&_nc_oc=AQkkpoDrTaT34dHU79fUTziznfHjMaVd3o79XMkFlAuIOWmhsSuiox20UrgZz2klS5sF1zqsbaBbRh4b47vsF389&_nc_ht=scontent.faep5-1.fna&oh=ce8a6d8f52078bf35e3fd86bfd6395a1&oe=5E160D32',
        image1: 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/12814700_608091132674619_409232649670383447_n.jpg?_nc_cat=104&_nc_oc=AQkYZDULnKKWONR4ON7c_zKLbXkpiyYuQX2k38b4leW7AoeAmqk5bbFwqvwT4UY7Bfhz3kR1XB3879TYR4wAaYiC&_nc_ht=scontent.faep5-1.fna&oh=11101aa87f2acd33989ed47e1c4aed19&oe=5DCDEC3D',
        image2: 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/16683984_779241648892899_2546257270581309566_n.jpg?_nc_cat=103&_nc_oc=AQlqttXPc2UgfJnjGMfsdQdjJyfFIn42cynZNtmPOBaN8srmGEd4nYDuVZRRNICPqP7QmyX7NegPRtfCoBaeQX24&_nc_ht=scontent.faep5-1.fna&oh=d712f6c81a7b271b237a76ecbe2316ac&oe=5E0FAF38',
        image3: 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/16508254_778198165663914_3822510508433570475_n.jpg?_nc_cat=105&_nc_oc=AQmCXdIBch3zuRQME2EZqBnBIl4pCId3kZmuPlfEY_vxJ4JYnfUwEjRd70VTeG6DxEMSsL8aSm1ihphHkxCkwXF6&_nc_ht=scontent.faep5-1.fna&oh=673362d335ec5623b52b3e34a9bc0cce&oe=5DD176EB',
        image4: 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/1517483_281375795346156_123876912_n.jpg?_nc_cat=103&_nc_oc=AQlhjYC3CKy64pGMWvBXFk7UkNhB8RQsN-nrB5Hc-LtonUw7U3MslJoWhJ5w_LT2qPCyBKL8FLnKJn27LPmroHOn&_nc_ht=scontent.faep5-1.fna&oh=d6bfc7cd78816ea8655eee8751e71623&oe=5DD7E3DB',
        image5: '',
        image6: '',
        map: 'https://goo.gl/maps/MkiqWZuTa1mW4iKh7',
        reserva: 'https://api.whatsapp.com/send?phone=5492214343655'
      },
      {
        name: 'Garra Charrúa',
        id: 'garraCharrua',
        search: 'garra charrua',
        rate: '4.2',
        location: 'Calle 64 n°641 e/ 7 y 8',
        canchas: '1',
        futbol: 'F5',
        cesped: 'Sintético',
        infraestructura: 'Techado',
        background: 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/376855_104110579704862_1428988978_n.jpg?_nc_cat=101&_nc_oc=AQnSYO8qFM9wUIXeawmz42LwASWrmTaoCch7vAJS5BgTLr6OHDkNal-oCUHFJqaxmEAQuBBIKIRhurKvQbGwlBDf&_nc_ht=scontent.faep5-1.fna&oh=92ef51eb8f21cd435f6c59aec17feb36&oe=5E131EFE',
        image1: 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/46005718_666698547060935_7660095647252480000_n.jpg?_nc_cat=100&_nc_oc=AQkam_Op42MhlgMIugYqdTJ9dTC-zirX4XxoIHf3aqO2PhGr1zPWSh9_ZNXp2Z38XeOdcOFIeLbfg-d4HOZLa1Jf&_nc_ht=scontent.faep5-1.fna&oh=b45039f0bda8f15ea8fcf6285a716b58&oe=5DD6B050',
        image2: 'https://lh5.googleusercontent.com/p/AF1QipO0nl0wOloz98skvS_7aaA18WSxLtmpLGHq-Qt6=s505-k-no',
        image3: 'https://lh5.googleusercontent.com/p/AF1QipPOjfHarHoGVB4DSBOXvHQOpVg4lPsD8b_kag-m=s387-k-no',
        image4: 'https://scontent.faep5-1.fna.fbcdn.net/v/t1.0-9/39760803_624958477901609_5829235510844850176_n.jpg?_nc_cat=109&_nc_oc=AQkuNCsrv-m12MId4Ol0aIHwJUDV5zzyEbzgRcjcvbmCtp0lRD4Nh8ioRGgGjNqMyRU5SghlWjka_p-DcqjuL8vE&_nc_ht=scontent.faep5-1.fna&oh=a86c097ca1850496deaaaa6cc45049a8&oe=5E061920',
        image5: '',
        image6: '',
        map: 'https://goo.gl/maps/3TJuxxmgZTvZdkRf6',
        reserva: 'tel:0221 427-5538'
      },
      {
        name: 'Predio 98',
        id: 'predioNoventaOcho',
        search: 'predio noventa y ocho',
        rate: '4.4',
        location: 'Calle 16 y 98',
        canchas: '15',
        futbol: 'F5 F7 F11',
        cesped: 'Sintético y Natural',
        infraestructura: 'Abierto',
        background: 'http://www.predio98.com.ar/imagenes/logo2.png',
        image1: 'http://www.predio98.com.ar/imagenes/fotos/grandes/3.jpg',
        image2: 'http://www.predio98.com.ar/imagenes/fotos/grandes/4.jpg',
        image3: 'http://www.predio98.com.ar/imagenes/fotos/grandes/6.jpg',
        image4: 'http://www.predio98.com.ar/imagenes/fotos/grandes/10.jpg',
        image5: 'http://www.predio98.com.ar/imagenes/fotos/grandes/14.jpg',
        image6: 'http://www.predio98.com.ar/imagenes/fotos/grandes/18.jpg',
        map: 'https://goo.gl/maps/vsiiTQCNkUctjtUY9',
        reserva: 'https://api.whatsapp.com/send?phone=5492216258871'
      },
      {
        name: 'Línea de tres',
        id: 'lineaDeTres',
        search: 'linea de tres linea de 3 sin orsai',
        rate: '4.0',
        location: 'Calle 11 n° e/ 70 y 71',
        canchas: '2',
        futbol: 'F5',
        cesped: 'Sintético',
        infraestructura: 'Abierto',
        background: 'https://scontent.faep9-1.fna.fbcdn.net/v/t1.0-9/30226455_453938721703585_5500172043738053816_n.jpg?_nc_cat=109&_nc_oc=AQk4tKLMyLfNaz00EiuFdGUdTneaXe5qjAzVh8KJGe2kglosHRGTv467faMDUeEMi5U&_nc_ht=scontent.faep9-1.fna&oh=b1046a5d376e5388fc30f7f0185b0c8d&oe=5E14BBFD',
        image1: 'https://scontent.faep9-2.fna.fbcdn.net/v/t1.0-9/48366604_603906753373447_4081026969167200256_o.jpg?_nc_cat=110&_nc_oc=AQlSQXilu8M3_AkFEV-FqTyhFssRv96W0UukUxU7nfOwxtw6HA9YPz9pQGBMXnwInRA&_nc_ht=scontent.faep9-2.fna&oh=96c241193f741c3e0eea0b73b28a9193&oe=5E0AE448',
        image2: 'https://scontent.faep9-1.fna.fbcdn.net/v/t1.0-9/48361057_604243906673065_408013651077758976_o.jpg?_nc_cat=104&_nc_oc=AQlV5P3J89r0lwWlVOP9rdBRjfTmDSkp0SgMvjFgft0MKx7fwKE32WRNtA8LbCZYtb4&_nc_ht=scontent.faep9-1.fna&oh=85d4ea60d308409ee2a32e93de5cba48&oe=5DD041BC',
        image3: 'https://instagram.faep9-1.fna.fbcdn.net/vp/8bdf52cf0a12fec316022d5b2f1f6733/5DF16288/t51.2885-15/e35/66959192_160998091623492_4192967524282818349_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net',
        image4: 'https://scontent.faep9-2.fna.fbcdn.net/v/t1.0-9/48408323_604244000006389_8826100773294178304_o.jpg?_nc_cat=107&_nc_oc=AQkDVXz01zNVhF05RWY-OhzXjtVGUfZ011J-HwvSzhn-Dk-GyQKQMNHB3rwWrT6ryRI&_nc_ht=scontent.faep9-2.fna&oh=3c2997b1a2834fb9611c05c21f84694d&oe=5E04AC4C',
        image5: 'https://scontent.faep9-1.fna.fbcdn.net/v/t1.0-9/48402948_603907063373416_5816953536465862656_o.jpg?_nc_cat=108&_nc_oc=AQlme47l3hBtU9ZKb0Zg9rseXitV6slKmYOVGDgQ3Ue0BHzfe2gp8zn4RJ52RT1fUms&_nc_ht=scontent.faep9-1.fna&oh=d83bb72dff33c8b954c3bb36e5ea5e15&oe=5DD12B41',
        image6: 'http://www.predio98.com.ar/imagenes/fotos/grandes/18.jpg',
        map: 'https://goo.gl/maps/38E4sEwsggPtoVTC9',
        reserva: 'https://api.whatsapp.com/send?phone=5492216737686'
      },
      {
        name: 'La Caldera del Diablo',
        id: 'laCalderaDelDiablo',
        search: 'caldera diablo',
        rate: '4.3',
        location: 'Calle 77 n°1130 e/ 17 y 18',
        canchas: '3',
        futbol: 'F5',
        cesped: 'Sintético',
        infraestructura: 'Techado',
        background: 'http://www.laguiax.com.ar/media/W1siZiIsInByb2R1Y3Rpb24vZ3VpYXMvMS9jb21lcmNpb3MvOTgxOS9mb3Rvcy9hcmNoaXZvLTg3MjEuanBlZyJdLFsicCIsInRodW1iIiwiOTAweDQ1MFx1MDAzZSJdXQ/IMG_8117.JPG?sha=bb3f8bc4713d5aa6',
        image1: 'https://scontent.faep9-2.fna.fbcdn.net/v/t1.0-9/11221659_1156130661068923_9147511134133948022_n.jpg?_nc_cat=101&_nc_oc=AQlGS9HPnbz1FUXz17i7XMkWT3qtZznQpM91y4Ra7zf8dXZEZ5bRMb7cwLi1p3ctS0s&_nc_ht=scontent.faep9-2.fna&oh=4fe8c903b2116ef942cd62d3540c64b2&oe=5DD9BFCB',
        image2: 'https://scontent.faep9-1.fna.fbcdn.net/v/t1.0-9/11947591_1156130641068925_7999192241865298682_n.jpg?_nc_cat=100&_nc_oc=AQlIU4de4n3Gqi7zl9GPq531fO4gyMW69F9uSwInVXAY_Q9n0gQVHyHkUzPIpEJcWXI&_nc_ht=scontent.faep9-1.fna&oh=a358ab4804148d504023292be3cd700e&oe=5DCDDC28',
        image3: 'https://scontent.faep9-2.fna.fbcdn.net/v/t31.0-8/1047933_682763788405615_539544558_o.jpg?_nc_cat=105&_nc_oc=AQm8zCkTSlRG-Fe_PGEdEmj8fx3HX-OwuSRKQ54U6XyWVhIqmZlwuTbIYjE3YtfOSv0&_nc_ht=scontent.faep9-2.fna&oh=53d1496cf283bfdbdefeb69e0c373790&oe=5E06BA6A',
        image4: 'https://scontent.faep9-2.fna.fbcdn.net/v/t1.0-9/11892171_1156130611068928_3753711263821374843_n.jpg?_nc_cat=101&_nc_oc=AQnGKjyqvSSD0FMqddHxh_TRmy27PoHaG-LHgUc00GxWYVIqp47G5g68r1SJ6AsVjXQ&_nc_ht=scontent.faep9-2.fna&oh=891b6f745742fc2fe79245aa2629f250&oe=5E0BED3C',
        image5: 'https://scontent.faep9-2.fna.fbcdn.net/v/t1.0-9/11928749_1156130597735596_7788703756586522388_n.jpg?_nc_cat=106&_nc_oc=AQl2ZXdunAtSRYz-Pc7FtudukMxswCltLA2AOGldLuXbuFJoZwPZhsR0ju-wKfzzyMI&_nc_ht=scontent.faep9-2.fna&oh=158db5655f83d65c7bdedbff58187b4d&oe=5DCB5225',
        image6: 'https://lh5.googleusercontent.com/p/AF1QipPIbnTZwTLU40uHqZT_KN6tzS4qWoXzBfQ3YydQ=s516-k-no',
        map: 'https://goo.gl/maps/w4SECGwhS74VYysu8',
        reserva: 'tel:0221 453-0955'
      },
      {
        name: 'El Ayuntamiento',
        id: 'elAyuntamiento',
        search: '',
        rate: '3.9',
        location: 'Av. 1 n°777 e/ 47 y 48',
        canchas: '2',
        futbol: 'F5',
        cesped: 'Sintético',
        infraestructura: 'Techado',
        background: 'https://lh3.googleusercontent.com/proxy/xBHTcK7MsLaJIzt86OuNsl9JOw1ukX6IMBHR_jjIOizg5JkEz-XoyLAzyWRZnClfRz-tjabmp0A0bskssE_RQm0GNRPLVfWLQYJiKKwqQOayZKSqoqBi_7Xw7u3s6aXK-GZtEB1mjvgSD45Xq8TACTTpSVc=w203-h152-k-no',
        image1: 'https://lh3.googleusercontent.com/proxy/xBHTcK7MsLaJIzt86OuNsl9JOw1ukX6IMBHR_jjIOizg5JkEz-XoyLAzyWRZnClfRz-tjabmp0A0bskssE_RQm0GNRPLVfWLQYJiKKwqQOayZKSqoqBi_7Xw7u3s6aXK-GZtEB1mjvgSD45Xq8TACTTpSVc=w203-h152-k-no',
        image2: 'https://lh4.googleusercontent.com/proxy/UgTnFYeUyg-jH9Qzfls4FsZTVusN0JFe0uumsKsFcpjDsxvblGCTocW9j_EmmH_C5zx-LuWrfkM0Bn-mLwle0nh_x-45oRB-jnZS940aBANgrq10S48wqd62XifatCttCavA_4FgRhSSDkkNPU6B2QXRQb0=w203-h152-k-no',
        map: 'https://goo.gl/maps/Yj6HXNKnXM6gLynXA',
        reserva: 'tel:0221 425-4994'
      },
      {
        name: 'La Posta',
        id: 'laPosta',
        search: 'la posta posta',
        rate: '4.0',
        location: 'Av. 1 n°1375 e/ 60 y 61',
        canchas: '1',
        futbol: 'F5',
        cesped: 'Sintético',
        infraestructura: 'Techado',
        background: 'https://10619-2.s.cdn12.com/rests/original/102_323154611.jpg',
        image1: 'https://lh5.googleusercontent.com/p/AF1QipNgccc7tyGHws_KW34rnJCJETnovx_hkW_Dq6SX=w203-h270-k-no',
        image2: 'https://lh5.googleusercontent.com/p/AF1QipOfI1rXh4ksIK6gmm7PuKNcgRkuy71RZHRhAQDL=w203-h152-k-no',
        image3: 'https://lh5.googleusercontent.com/p/AF1QipMng65u_S2-SLnCyjjpXitaDysOIoNGOs_1NHAn=w203-h270-k-no',
        image4: 'https://lh5.googleusercontent.com/p/AF1QipPwKGnOMcsAFnDxDAD7raHGZt1O55lAeFLmehw0=w203-h152-k-no',
        image5: '',
        image6: '',
        map: 'https://goo.gl/maps/3qUcR87bs8KhFZ34A',
        reserva: 'tel:0221 482-3499'
      },
      {
        name: 'Camp Nou',
        id: 'campNou',
        search: 'camp now castañeda',
        rate: '4.2',
        location: 'Calle 69 n° 863 e 12 y 13',
        canchas: '4',
        futbol: 'F5',
        cesped: 'Sintético',
        infraestructura: 'Abierto',
        background: 'https://lh3.googleusercontent.com/b5QGuQpOScBt33T2C8C2rFTefJwFLfG7cPsaMq_ihD8XzGLgjUVbLsT41KnOGfulgPpcn09u=w600-h0',
        image1: 'https://lh5.googleusercontent.com/p/AF1QipNodpbbD_czQRJEOQMctfQECKO3XWtN9PqmN8Pq=w203-h114-k-no',
        image2: 'https://lh5.googleusercontent.com/p/AF1QipMpwT_sCI3M1ulZL1Tqm-t2IsHvX7YdwBuyxdoD=w203-h152-k-no',
        image3: 'https://lh5.googleusercontent.com/p/AF1QipNY1lbqFyxgBw7J9V58nrVmZdVdh7CJY7d7iMkG=w203-h152-k-no',
        image4: 'https://lh5.googleusercontent.com/p/AF1QipOG--dcTI-kWtot47ka-m3YpJlPSIl7Bv6YbNlR=w203-h152-k-no',
        image5: 'https://lh5.googleusercontent.com/p/AF1QipMPIB2spLkWqCi58-fpp3aZKdhnOP73ekpzYEeY=w203-h203-k-no',
        image6: 'https://geo1.ggpht.com/cbk?panoid=MmmV4XB6A7T_XqalEXRmYg&output=thumbnail&cb_client=maps_sv.tactile.gps&thumb=2&w=203&h=100&yaw=283.12222&pitch=0&thumbfov=100',
        map: 'https://g.page/canchasfutbol5?share',
        reserva: 'https://api.whatsapp.com/send?phone=5492213606778'
      },
      {
        name: 'Abran cancha',
        id: 'abranCancha',
        search: '',
        rate: '4.8',
        location: 'Calle 7 n° 1972 e 72 y 73',
        canchas: '1 cancha',
        futbol: 'F5',
        cesped: 'Sintético',
        infraestructura: 'Techado',
        background: 'https://scontent.faep9-2.fna.fbcdn.net/v/t1.0-9/54268275_1012105125655220_2025072574643306496_n.jpg?_nc_cat=101&_nc_oc=AQlXBBjeFa5o3bIVfRMnMORtojxtCuycua236zkWEkCXNq-jAebEzFpYOXduKAXw7pQ&_nc_ht=scontent.faep9-2.fna&oh=4111e159c42ef2906f1ec177ab39595f&oe=5DDE2615',
        image1: 'https://lh4.googleusercontent.com/proxy/rpcGabE4LsTmYhwpn1aWgbIGCBbdPM5UZLmoTEL3L2WcCdZ-BGNMWo2oVFAUEdUFWzLUavh3QODQJ1POgJ70jMII-Wmy8bOAy9wZORD-fbeWrFfazVOPmIaFlqCK4taDqw2vP_slYobG6TxjneiNBcHLWwM=w203-h270-k-no',
        image2: 'https://lh5.googleusercontent.com/p/AF1QipMnFIoGX45-C_eMt5lT7VqIGd6NEygOE66QUHW4=w203-h114-k-no',
        image3: 'https://lh5.googleusercontent.com/p/AF1QipMe3v7zf10uETA_k8S9SYUYBweat5nswQnNzG1m=w203-h114-k-no',
        image4: 'https://lh3.googleusercontent.com/proxy/81Hxj2LCzH6L6W7xevnPMoMMD1iyOv5MgtZYboE5zZnzh6r69RmpMOhMFTi2Wp8aIHcLe2rFl7ywZxwo-wcdRF9J1Qx6QUNkxc9bSsdj-EUGU5YZAf_RUkYcMZqTLRAGZAUAlEO_azf9717F4FYmSh9_5U8=w203-h152-k-no',
        image5: '',
        image6: '',
        map: 'https://goo.gl/maps/12WTNnHbsjNghsRT6',
        reserva: 'tel:0221 453-5344'
      }
    ]
    };
  }
});

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("btn-container");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


function menu() {
  document.getElementById("menuOpen").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//Search

$(document).ready(function(){
  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#search-ul .show").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

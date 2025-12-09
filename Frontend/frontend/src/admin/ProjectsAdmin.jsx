import { useEffect, useState } from "react";
import api from "../api";

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExMWFRUVFRcVGRYWFhUWFRcSFxgXGBUXFhcYHiggGBolHxYXITEiJSkrLi4vGB8zODMsNygtLisBCgoKDg0OGhAQGC0dHR0tLS0tLS8tKy0rLSstLS0vNy4tKy0rLS0tLS0tLS0tLSstLSsrLS03LS0tKy0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYHAQj/xABPEAABAwEEBQcGCgcHAgcAAAABAAIRAwQSITEFBjJBURMiYXGBkbEHM0JywdEUI1JUYpKTodLwFRZDU3OisiREY4Ok4eI0gjU2dMLD1PH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACIRAQEAAgICAgIDAAAAAAAAAAABAhExQQMSITITUSJhcf/aAAwDAQACEQMRAD8A6ohCFkCELxFeoXiEHqF4hB6kvXqS9KEIQhZUIQhAIQhAIQhAIQhAJyz7TesJtOWfab1hBPrWq6SLlQxva2QcJw/O5JFtHyKuZHm3ThGMcMUzaqTi9xDapwzbVDW5Ac1pdgcSZ4t6ky+k+MadU55VgXQbpznETPVB6FtEw2yP2dX6k+BXtK1hxu3HjpLSBPCcpUShQcS282s0ZkmvIEZBwBxz6VNoWcMmHPM/Ke5w7JOCB5CEIoQhCAVbbts9ngrJVtu2z2eClEdCELIdXq8QtMp+jqYIJInGEzV0kxpf8S8hhuyGgy6HmAM82gcOe3piRozI9amrQrG6TpHG4QMcS1oyjITJzGXHGE5ZLWyo66KZBicWgADp6cfzCnoQI5JvAdwRyTeA7gloQI5JvAdwSKtNsZDuCeSKuSCPyY4DuCOTHAdwSkKNE8mOA7gjkxwHcEpCBPJjgO4I5McB3BKQgTyY4DuCOTHAdwSkIElg4DuCbYQfQIyzaN6eQgiW+mLoMYzCiWfab1jxU3SGz2+wqFZ9pvWPFZvIy+svlEdZbXUs3wZrwy5DzVLS68xr9m4Yi9Ge5RqXlPcf7q0f5/8AwWR8o1IP0tWI/ZxUeYJAbTs9Kochjgw5L2wMsjarxUoB4vQKhY1jHG7Iuui84E8ccTwxxlbO2p/jcUvKDUds2VpP8b/go7vKTUa4tdZAC04gVi4gYY82nAGOMkdqiaMZYS7CyUtstJptY+GDJ7gG3twGIMTmqLS12nVdcljBUbF5rmAC/syeIe0RnmsXPKTcu1s/p2vHHrwx3exRn2ogkXRgYm+wdvEKW7NNmmOC9DBgWs/JH12J5lVpjEdUg4ndgltEZL1AKtt22ezwVkq23bZ7PBSiOhCFkOoQhaZWOjMj1qaoWjMj1qatAQhCAQhCASKuSWkVckDKEIUaRtI03OYQ29MtPNIBMEGMSJGGIkSJxVVTFrggFwgBs/FOggU4LL8l/pg33b8CYVzab8C5gbzZMAwyRez3xP8Auqik22PuOfLCCC5rSy6TeoEg7y2OWA6BvMEgpzLYRtEOnHCi5npXboJBu7N6TMjm4SnrTQtDqpuvc1l6QRyQgcm4AAEEu5xBN4CNwOYaoVLW5sPBYSDBbyRhxaJvEnAAl0EDdjMC97aLRaQbtNpc4UWOhwYAajhVm+4HAyxkBuEngZBA42wBxAk86BNKJIqXC3fdBNOb2OBid7tlo1xV5xdcBeRiy7dI5s+mXTPREb8mjUtd2YxkC7FOSJqYuJwGVPIDM7My1dN9qJxEANvGQzGrLZYIPm4vQc+JwxC1QqCba5rpaWGHgQ6nONKWnhPKEtEjIb9o2dhrVHOqB4waboMAXsA+cDwexvWx+6EXZekNnt9hUKz7TeseKm6Q2e32FQrPtN6x4rN5FHb9N2AW2tRdZ79dgaXvAZJDmMLZ507LmjLcotu1q0Y6oaNWgHPAHNe2mZBAI2iuba9WhrNO2y+8Ma4UGm8CWuaaNAOa5oHOkTwiJ3QWtM2OobfUcGktqUw1rmguhwZT2oy34lcc8ssbXfx445OqDT+jqILhZhTDzJIZTYHHISZxKKGtOj67XMbRFRohzmxSIEmGkguz9y5TpLR9pDGiJAjAXpzkugDAAd+6VP1dspo1qz2kVOUpAtbdewTSIwdeEib2GG48FcMrVzwxjvgOeBEGMYx6R0Jk2iCeY/sbn09KkOTLrM0mYzXd53ja8mLj887uCehM/BWcEsUmj0R3BAtVtu2z2eCslW27bPZ4KUR0IQshwlMVLSBko9WqTmUyXfngrtNNBoF8tcekeCtFUauHmv8AW4zGGXWrB9+TE/y+1aiH0Jjn9P8AKnWknMQqFIQhAJFXJLSKuSBlCEKNI2kDUuHktuWxgDvEyDuhRqFevfAwIdTDpNJ7btS6drEANkDmyXS45DEWFRxAwBPQCB4pttZxMcm4DiSyPudKCtp6SruuuFLmuAdF1zjycON6+DBdg2GxJvb0r4baDzrgDeVLQDTqF5pYw7awJw2roEGeCtgexCADpx49Y+45IQhAIQhBG0hs9vsKhWfab1jxU3SGz2+wqFZ9pvWPFZvIy+sWiNCVrXUNpAdaAWF4vVBiKbLmDcNm6nDR0NMGDugiocusLNeUilZ3WutNSmKo5MgOIBvCmy71bu9QtF2l1BlOpXaKlJzoviL7SSdx5rx0DEQYvK+s3we9/bo9nsNgFMVGiKcYGHNAEwABA37t6Kdj0c/nczhznQZBygmcx9yxFs08KloZSa1zqIDoh0seAwukg4tAMQBG+c8K6lZbW6o1lKqbOwudi6WA1LzsxdJIhoHcm/nS6+Nu2B0z0GMiMeic+tMm0sBILsZ4OzyUgpl1GTN53efuVQh1upjN47j7k+DIkb8U1yH03/WKWynG8nrJ8MkC1W27bPZ4KyVbbts9ngpRHQhCyKy927hvk8JG7r3pLnfd97uOEoc7Cewfl2/s7EmcQNwE7z3jJVFho/T1lsrS202mlRc43gKtRjC4cReOIU79cdHfPbN9tT964l5WfPUf4b9wHpBZr0R1BaiV9HnXfRnz+y/b0vxI/XfRnz+y/b0vxL5ecMT1lOMCbTb6fGuejTlbrN9vT96Sdd9GfP7L9vS/EvmuiMR1qiq7Tus+KbNvrD9eNGfP7L9vS/Ek1Nd9GfP7L9vS96+T0BVX1X+uujPn9l+3p+9H666M+f2X7el718rhKIwPQB4/7qG31X+tmj/ntn+2p+9A1t0ecrbZuHnqefevndoSaHpesfYps2+mLLpOhV83VY/LZcHZzGXqnuKlBwXPPJ2MB6rPG0LoFMKz5i7OIQhFCEIQRtIbPb7CoVn2m9Y8VN0hs9vsKhWfab1jxWbyKTTPk7stptNS01HPv1HMcRdpEC5TbTABLZiGgxOaaHk0soJIc4AmboZRAyA+R0LbIWhlbDqHZqL31Kbnsc+7JbcAAbGDRdgDAffxKsrNoK4LoqvukEFt2mBj6TQGw1wmZAzzBVwhNKCvAF6s7bddbHSqOpPc+8xxaYY4iRniiNEhZg6+WKAbz8RPm3ZTHsSD5QrAPSqfZuTY1Srbdtns8FSu8otgHp1PsnKbZdKU7U0VqRJY6QJBaZabpwPSFKHUIQsinwJGRu8Bl28OpDScc53AkAjqjIdOaSwnE84478HcIGUdeBXlNuEQMcYOPed/5xVRzLyqD42hlsPyM+kN+9ZwbI6gtL5VvO0MvNvyy2wsbUtJBjdAVZpt2Z6ylsVjq04OfVaWh003EBwB5wOBE5HFWzqLcfimYtDtmnu//FdChpHEdao6u07rPitLpKoWuMNptENI5rDvxgAdCodJMAquu5GHDhzmhxjoklBFXi9KtNIav2mhQpWmowClW2HBwJmJAe0YtJGOPjggrCE8xnNJOeAHv+5MsPR7ME844ff+fzvWRogkUPS9YpbQkUfS9Yq0dh8nI5rfVZ42hdBC595OTzW+qzxtC34KY8RotCEKqEIQgjaQ2e32FQrPtN6x4qbpDZ7fYVDsu23rCzeRaoT90cF4Y4fctJsyhP3RwRdHBDZhcS1rH9tr/wAZ/iV3S6OC4VrTVi3Wj+NU8VMmsajspy0dDII4EOcCMOlRK9OPv8VKpWhnJ3r4OF2N4M9ahWi1tw5wGJzwzwy35nvXLbpp5Ws2H56F0zURsWKmPpVP63LnrLWx1Iv3NmcLwwicRIK6JqQf7HTMRN45zgXGCDvCuN2zlNL1CELTCjcYbjeOG6bx7sQO5eMHNjMcMDPXGHivXgxzYGG/wgZLxp3DPp3dmQVRzTypxytCMPi34cOcMPz4LA2lxvdy3nlWMVaEmeY/HoviO3xzWCtbpI7FqJVhoO0inXBOIN5pHEHwWl1RdTtThSq82oGmDBh0EgiA4QVhy/HtVpoHWB1BwfcvOaDdd6UHMHHHLeqjZ66ausoU6b2QZLmOJacBEtMkneD3rnFpqlzjJy5vYFtLRrf8JYadYYEhwDiYkHCS3EdnFO2qlSfSuXBckEhri5pjdg4OHXA7UVhqFmqPm4x74zuNc6Jym6DCuKtgt1Sk2mWVTTpMNQNMwOcRzRvdEc3MAEdCvrBY7O0RSdUoVTvpVqjXYZYVDzh2b8FV2y22uowipaalUBzbpcSYBkOiThPNnqUozsZCMZIPXw6FMr2J4pCpHNHNJ4OvGJ65TtLRjhj7verG2uIslRhEG812c5ELO4ap5oUakdr1inwVEadqZ2jucfAKo7B5P7QA2ZGDGfca34wtxQt4c4DDExmfcuDaL1vtdBgp0rQWtGAHJMdGJPpMJzcVotVddrbVtlnpPtBc19VjXN5GmJBOIkUwR3qT9NO0QiFJQtm0Qtdx+7/dAa7j93+6loQ2rdIbPb7Codl22+sFY6V2B6w8Cq6y7bfWHisXkXyg2itUDjdmP4d7GBkb4w7FOVXarKS8u5OcQZuUSTgBgXOnec4y79ocFarhOU/ujljn8Z1YrwV62HX+6I/+T8wm6GjQRixrcd9OjJPyubI3pf6IbwZOH7KnwI4IJ9J8iYI6Dmvm7X6uf0jXa17x/aHhwb8kcMM8R3L6Ps9AMEAAcYAbJymAuEa46l2+tbbTUZZHvY+q8tcLkFpOBHOUqxlbJpR9GldddgmfjAXc4EYXWbpE47jglWq0PtAaGcmYwAo02giflX3tI7lZUtQtJNysdQTnFzH+ZOfqXpTL4JVjhLPxLn6t+ynqaLtLW3W1w1hdeLDVc07gbwpy0yBGZyC635NKFzR1Js3odVx/zHmOzLsXNzqNpQ/3Sr30/wAS6hqHo2tZrFTpV2FlRrqhLTEgOqOc3LoISTRbK0CEIVZUVcC7iS0ZDG7j0f7oAwxwbv8AREdSKxHpRiIg44dPQgNgY7t7iqjmPlSoF1WhyYLm3H5ZAlwmO2fzgMa3RNV2N2Oshdzr6nfpA8o2uKVzmkGmXySAZ22xknLP5KQNq1XuqkQO6+U+V1HC/wBEOMjAGD6QhSP0HABk5tGGO0Q3d1rvjPJ4Bhywj+F/zQfJ9hAtEf5eXVz1rSOIWDV0PdUBDjcIbgN5aHeDmqx0bor+zPqEERTvjecKYJAgztBy6m7yZHH+1RJk/FnE4CTFTgB3JuyeSwMABtUwTHxbhhJIEcpuECd8JpHM9ZtW6jKLKghzaYBqbnRzQTnzt571Z6M1arckwEMnMhwkg3gRMHH2TC6M/wAnd5hputJLHNLSLhEtOBGD5CtKWqjhnXn/ALI8HJpdsAzVZhAvsbO+7fAnoxyTdbUug8FrmmDuD3jp4rox1Xd++7mH8SSNVXT5/wDkP4ln0i+1c6r6n0m3Q2m4zF5zqxbAnNrRTMmNxKbdqhTGQcet13twnPhujMzh039WnYfHd7CfuvJTdXCP2jfqHP6yvqm3KaeqT5ukN5O/ei+68Rjheu54hXOr2q1OnaqFRrHS2q07cgQc8sVvf1dduqj6mH9SfsuhCx7XF4MEHBpGW7aSY6LdrlCELSBCEIIWldgesPAqusu231grHSuwPWHgVXWXbb6w8Vi8r0vk26i04kJipa3Nfd5J5EtAeII52ZImQB1e1S1tCWMAEDBKQhAIQhAIQhAKm0l5w9ngrUVRMY/VdHfEKq0l5w9ngpksRUIQsKz9QCDejEERO7filhhOf3+zgkuZgZGBEcSUlskRM/nfxKqNPqmRcfGPOHgr1UWqbYY/1h4KVWNqDzdDCwubdnEtaBDiRhnnmVqIs0Kpm2QSAyYMNMRPMDRIOeDyesdi6brTILgCC4SAGyG3W4Dncb0mT0SqLNCq677SKhuC80kRIbdAESJBnHHE5GIBzXlOpa8JYwc4Tl5vjtbXHshBaoQhAIQhAITNr2d+e6/P8mKhCfp/6jL3oLNCrfr/AOo6V44n6WH/AKj2ILNCrCTjF/8A1H57kAnPn8f7xEfmMOtBZoVXe3c//UeKmWR2BGM5mQ+Owv8AAIGtK7A9YeBVdZdtvrDxVjpXYHrDwKrrLtt9YLF5XpWaf1+o2S0PoVGmWlvOBnBzQ6SBlmn9E662euHOFRjQDHPNw9gcedluVRrdq1WrV6tWm5hvXRccIN0MaDzjhu4LPWfUCu54dUdTZE5Oc6BOENDRPeFz35N1vXj+PmtHrrr46z0r1kdRqv4GXRGcgObHf3b9Da9K1W1HNAZAOEh0xh09K5dp/Uy0Mpu5N3LE+i26yBBnB7oO70uK3+nHPv1Q2QSSQ4DeACN2RiD1rp4rlbfaaTyzGfW7S6mmqw+R9V34lCfrJaQ5oilBcBsuyJ9ZQKdSrdAcJIJBOUjccYTNSob7cPSbw4hd7I4S1orRp2qKj2AM5ry0YOmASOKdGl629rRhwP4lhtbddnUKjmWdrTUbanMqAtefiRevOBIaA6RlLu1QK+utsqll2i4COf8AFYE/Qdfw7Qfdx266aka4Wv4No+tFEvtVqpUXtDXwKb3ua8sl0ggDCZ6lptJecPZ4LkugNF220VLHyrHNp2e0UntcRdHJtffIc1zpLi7eNxK61pLzh7PBS3ZEVCEKKz5h2ePh7l5Rc66ATiAATxIGJHQvajicB9+KTRILWuccSMQdx3iN8FVGm1RbzKmJMvGZ6B3KZXsFW8XMrFpcTIOIA3QCDjmI3z0BRdVHgsfE4OG6NyvVqIqxYawcSKpLSSYJMyXEjEgxAjuiIKGWGsIHLG7InElxaMHCSM3Zzm2MJmVaIVFdaLHVIaRUIcGw6DDXOwh0RhEuMRBnHIESbGyoARUcHYiCMMA0AyIwJILui9G5SEIBCEIBCEIGrREYiccsPaVGhn7s/wAv4lKr0rwiYxnJp/qBCZ+Aj5R+rT/CgULV9F3ez8S8Fr+i7vZ+JJ+Aj5R6ebTx6+b+YR8AHyjw2aX4ECzafou72fiR8K+ie9vftJHwBvH+Wnlw2V66wg+kfq0/w9KBQtX0Xd7PxJ8FNMszQBIBI3lrZnjgE4xgGQA6sMUETSuwPWHgVXWXbb6w8VY6V2B6w8Cq6y7bfWCxeV6TLVevug4YYXqQjAbiwnvO9Kp2R5m89wjI/FOnpI5MQrBC2hs0W/JHcFX2im4udzhnlepd2NMkd+9WiEFZTsTyYdIEDH4k48I5PepFGwNbnzvWbTw6rrQpaEFRWs8uJkTeIzomJOG1TJE8OhJGjnTsDP8AwYIO7zUx71coQRrNYWsGQcZmS1gIyyutHWq/SXnD2eCuVTaS84ezwUyWIqEIWFUBZGJM9AwTLQJ6eAxjowTjmTnj15dyRZX3RdIMhzowzbMiN0AEDsVGp1SHMf6w8FdFzvk/eFTapulj8I5w8E5a7Q8PcA4jFa3qItmOO8R2ylrNPtlX5ZTL7bV/eO702aatCxlTSFb947vUSrpO0D9q/vU9jTfIWN0ZpGsbPbHOqOLmUS5hObXXKhkdw7lyn9c9Ix/1dX+X3JctLMdvohC+djrppH53V72+5OWXXLSJdBtdXL6PuWfyRfSvoVC4N+tlv+dVO8e5R7drhpAMcRaqoIHFvuT8kX8dfQKFy86ftX6Esdo5Z/LVHw+phecPjs8Pot7lmHa2W/51U7x7l0ctu7oXAna26Q+dVO8e5IdrhpD51U72+5TavoBC+fWa46Qn/qqv3e5Wlm1vthqUw60PAL2AiRiC4A7lU27DpXYHrDwKrbPtN6wrLSuwPWHgVW2fab1jxWLy1FuvF6vFpXqEIQOUVUWitde6LU4c/FvJh90yMMsBGHerelvSat7c0Hrw9hVRAovcXNYK5LmmHQwGRdkSTkeaeOafpWWqCC6uXAGYuNAI3gwpNMHeAOr39ZKdRAqbSXnD2eCuVTaS84ezwUyWIqEIWFUBaBjn14me1NtqDjJ6MezDJD2A5ievFN0HBrqgJgc1/eLv/s+9UazVLYfhHOHh0KktWs1A2yrZp57CZ39c/J7VeaqOlj/WHRuXGdZGN/S9qioGnlSXGXC6QGwCcsfareEdQNtZ8oJt9obxWFo2Gs4XmukHIgyD1L2pZrS3eVnbWnVNE1JoiPlOVTrTVALJ4HxC81SqO+Bsv7V98/WMKn15tZDqUfJd4hW8J2n6IqA2W3x+4P8ARVXGrmC6pqbWL7NpEf4A+9lZc++BGMljK8OmHaqczBPWFvO7FKr2Qhsp3RdjLjI4LFvw08c1Q9ID4t3UrK1U7qrdIH4t3Upitbk/+XrB/E/+wsk5bSy2J1bQFgY0EnlJAEf4/HrWRrWSpTvCAZEc4HDEGQRvw+8r1PLUCqU0XhKbTe4nBP8AwBwAPFcr5JHSYWopeTkI8VaaOsrRVpXnSeUp4Nx9IZnJFgskOH54I0cwmtSIH7Rn9QWcf58rl/Dh33SuwPWHgVW2fab1jxVlpXYHrDwKrbPtN6x4rpeWIn1LQ4GOTe4TEi5GQM4uBjGOxLo1S6eY5sfKu49UEpNSk4mQ+BwifanWjpnrWlKQmTSMk3jHAe9LY2N5PWgfpb0tIor0MxmT1YR4Ks0qEQktZBmSegxCGsgkyTO4xA6kClT6S84ezwVyqbSXnD2eCmSxFQhCwrL13G80J2sMWjde9hPsQhBqdU9h/rexcG8pOGkLWd/Kux/7Ge8r1Ct4ZbvQx/s1P1G+AVjSyQhZbXOjvMj1nLN6550+p3iEIVvCdvPJm4mjpCcfiqf9NdQCwcB3LxC5+Tp18fat1lYPg1TAbJWZ8ljz8Ie2Td5Obs4TOccUITH6Uv2jQ6wDnlZ63bDupCFjFqupatf+B2HrPjWUDSDBcOAQhemvOzVNojtKDuXqF4u69fRdmzH5+SlWEfG0/wCIz+oLxC7+Htw8vTtuldgesPAqts+03rHihC63liLaEIQtAQhCB2ilXRwCEKpSkIQiAhU2kvOHs8EIUyWIqEIWFf/Z",
    name: "Modern Studio Workspace",
    description: "A sleek and modern studio workspace design.",
  });

  const fetchProjects = () => {
    api.get("/projects").then((res) => setProjects(res.data));
  };

  useEffect(fetchProjects, []);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/projects", form);
    setForm({ imageUrl: "", name: "", description: "" });
    fetchProjects();
  };

  const handleDelete = async (id) => {
    await api.delete(`/projects/${id}`);
    fetchProjects();
  };

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold text-slate-900">
        Project Management
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-slate-200 rounded-xl p-4 flex flex-wrap gap-2 items-center text-xs"
      >
        <input
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
          required
          className="flex-1 min-w-[160px] px-2 py-1.5 rounded-lg border border-slate-300"
        />
        <input
          name="name"
          placeholder="Project Name"
          value={form.name}
          onChange={handleChange}
          required
          className="flex-1 min-w-[140px] px-2 py-1.5 rounded-lg border border-slate-300"
        />
        <input
          name="description"
          placeholder="Short Description"
          value={form.description}
          onChange={handleChange}
          required
          className="flex-[2] min-w-[200px] px-2 py-1.5 rounded-lg border border-slate-300"
        />
        <button
          type="submit"
          className="px-3 py-1.5 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600"
        >
          Add
        </button>
      </form>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-slate-100 border-b border-slate-200">
            <tr>
              <th className="text-left px-3 py-2">Image</th>
              <th className="text-left px-3 py-2">Name</th>
              <th className="text-left px-3 py-2">Description</th>
              <th className="px-3 py-2" />
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p._id} className="border-b border-slate-100">
                <td className="px-3 py-2">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="h-10 w-16 object-cover rounded-md border border-slate-200"
                  />
                </td>
                <td className="px-3 py-2">{p.name}</td>
                <td className="px-3 py-2 text-slate-600">{p.description}</td>
                <td className="px-3 py-2 text-right">
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="px-2.5 py-1 rounded-full border border-rose-300 text-rose-600 hover:bg-rose-50"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="px-3 py-4 text-center text-slate-500"
                >
                  No projects yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

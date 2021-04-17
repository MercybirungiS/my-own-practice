fun main() {
    countries()
}
fun countries(){
    var countries= listOf("Uganda","Kenya","Tanzania")

    var countriesMap = mapOf<String,Int>("Uganda" to 1,"Kenya" to 2,"Tanzania" to 3)
    countriesMap.forEach{key,value->println("$key->$value")}
}



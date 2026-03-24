class CreatePayments < ActiveRecord::Migration[8.1]
  def change
    create_table :payments do |t|
      t.decimal :amount, precision: 10, scale: 2

      t.timestamps
    end
  end
end

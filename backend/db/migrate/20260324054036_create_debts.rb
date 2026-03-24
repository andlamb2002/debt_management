class CreateDebts < ActiveRecord::Migration[8.1]
  def change
    create_table :debts do |t|
      t.string :name
      t.decimal :principal_amt, precision: 10, scale: 2
      t.boolean :status

      t.timestamps
    end
  end
end
